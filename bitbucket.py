#!/usr/bin/env python3
"""
Bitbucket Cloud API script to list all workspaces and repositories
Usage:
  export BITBUCKET_USERNAME=your_username_or_email
  export BITBUCKET_APP_PASSWORD=your_app_password
  python bitbucket.py
"""

import requests
import os
import sys

from dotenv import load_dotenv
load_dotenv()
from typing import Dict, List, Optional


class BitbucketAPI:
    def __init__(self, username: str, app_password: str):
        """
        Initialize Bitbucket API client (Cloud)

        Args:
            username: Bitbucket username or email
            app_password: Bitbucket App Password
        """
        self.username = username
        self.app_password = app_password
        self.base_url = "https://api.bitbucket.org/2.0"
        self.session = requests.Session()
        self.session.auth = (username, app_password)

    def _make_request(self, endpoint: str) -> Optional[Dict]:
        """Make a request to Bitbucket API"""
        url = f"{self.base_url}{endpoint}"
        try:
            response = self.session.get(url)
            if response.status_code == 401:
                print(f"401 Unauthorized: {url}")
                print("Check your username and app password")
                return None
            elif response.status_code == 403:
                print(f"403 Forbidden: {url}")
                print("Your app password may lack required permissions")
                return None

            response.raise_for_status()
            return response.json()
        except requests.exceptions.RequestException as e:
            print(f"Error making request to {url}: {e}")
            return None

    def get_user_workspaces(self) -> List[Dict]:
        """Get workspaces the user has access to"""
        workspaces = []
        endpoint = "/workspaces"

        while endpoint:
            data = self._make_request(endpoint)
            if not data:
                break
            workspaces.extend(data.get("values", []))

            # pagination
            endpoint = data.get("next")
            if endpoint:
                endpoint = endpoint.replace(self.base_url, "")

        return workspaces

    def get_repositories(self, workspace_slug: str) -> List[Dict]:
        """Get repositories inside a workspace"""
        repos = []
        endpoint = f"/repositories/{workspace_slug}"

        while endpoint:
            data = self._make_request(endpoint)
            if not data:
                break
            repos.extend(data.get("values", []))

            # pagination
            endpoint = data.get("next")
            if endpoint:
                endpoint = endpoint.replace(self.base_url, "")

        return repos


def main():
    USERNAME = os.getenv("BITBUCKET_USERNAME")
    APP_PASSWORD = os.getenv("BITBUCKET_APP_PASSWORD")

    if not USERNAME or not APP_PASSWORD:
        print("Set BITBUCKET_USERNAME and BITBUCKET_APP_PASSWORD in environment or .env file")
        sys.exit(1)

    api = BitbucketAPI(USERNAME, APP_PASSWORD)

    print("Fetching workspaces...")
    workspaces = api.get_user_workspaces()

    for ws in workspaces:
        slug = ws.get("slug")
        name = ws.get("name")
        print(f"\nWorkspace: {name} ({slug})")

        repos = api.get_repositories(slug)
        if not repos:
            print("  No repositories found.")
            continue

        for repo in repos:
            print(f"  - {repo.get('name')} ({repo.get('full_name')})")


if __name__ == "__main__":
    main()
