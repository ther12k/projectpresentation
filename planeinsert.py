
# Data proyek yang diperbarui
projects_data = [
    {
        "name": "JICT OCR",
        "identifier": "jict-ocr",
        "description": "JICT OCR Implementation Project",
        "issues": [
            {"name": "Update validation min max size on dashboard", "assignee": "Rizky"},
            {"name": "Upload/View image using webserver", "assignee": "Isra"},
            {"name": "Remediasi JAGS Server", "assignee": "Isra"},
            {"name": "Update CP for payment slip", "assignee": "Rizky"}
        ]
    },
    {
        "name": "KOJA OCR",
        "identifier": "koja-ocr",
        "description": "KOJA OCR Implementation Project",
        "issues": [
            {"name": "OCR UAT", "assignee": "Isra"}
        ]
    },
    {
        "name": "TSJ Autogate",
        "identifier": "tsj-autogate",
        "description": "TSJ Autogate Implementation",
        "issues": [
            {"name": "Autogate", "assignee": "Deja"},
            {"name": "AMS", "assignee": "Deja"},
            {"name": "SIT", "assignee": "Deja"},
            {"name": "UAT", "assignee": "Deja"}
        ]
    },
    {
        "name": "Kalibaru CA Autogate",
        "identifier": "kalibaru-autogate",
        "description": "Kalibaru CA Autogate Implementation",
        "issues": [
            {"name": "Mobile Web App (Autogate)", "assignee": "Rizky"},
            {"name": "Payment/Emoney", "assignee": "Rizky"},
            {"name": "Settlement (Automatic)", "assignee": "Rizky"},
            {"name": "Monitoring Transaction", "assignee": "Rizky"}
        ]
    },
    {
        "name": "Indocement Autogate",
        "identifier": "indocement-autogate",
        "description": "Indocement Autogate Implementation",
        "issues": [
            {"name": "Autogate New UAT", "assignee": "Rizky"},
            {"name": "Autogate New - Bug fix rfid double", "assignee": "Rizky"}
        ]
    },
    {
        "name": "Palembang Autogate",
        "identifier": "palembang-autogate",
        "description": "Palembang Autogate Implementation",
        "issues": [
            {"name": "Kolom Full/Empty di container", "assignee": "Deja"}
        ]
    },
    {
        "name": "Pontianak Autogate",
        "identifier": "pontianak-autogate",
        "description": "Pontianak Autogate Implementation",
        "issues": [
            {"name": "Autogate New UAT", "assignee": "David"},
            {"name": "Flow Autohold/P2 Check", "assignee": ""}
        ]
    },
    {
        "name": "IKT International",
        "identifier": "ikt-international",
        "description": "IKT International Implementation",
        "issues": [
            {"name": "Autogate API Gateway", "assignee": "Rizky"},
            {"name": "Dashboard API", "assignee": "Rizky"},
            {"name": "Dashboard Web", "assignee": "Iqbal"}
        ]
    },
    {
        "name": "TO3 : Xray",
        "identifier": "to3-xray",
        "description": "TO3 Xray Implementation",
        "issues": [
            {"name": "API Integration", "assignee": ""},
            {"name": "AMS Web - Xray Implementation", "assignee": ""}
        ]
    }
]
import requests
import json

# Set kredensial API
api_key = "plane_api_44422772847e4280aafa75efad680d41"
workspace_slug = "halotec"

# URL untuk API
base_url = "https://api.plane.so/api/v1/workspaces"
headers = {
    "X-API-Key": api_key,
    "Content-Type": "application/json"
}

def get_existing_issues(project_id):
    issue_url = f"{base_url}/{workspace_slug}/projects/{project_id}/issues/"
    response = requests.get(issue_url, headers=headers)
    if response.status_code == 200:
        return [issue["name"] for issue in response.json().get("results", [])]
    return []

def create_or_update_project(project_data):
    # Cek apakah proyek sudah ada
    projects_url = f"{base_url}/{workspace_slug}/projects/"
    response = requests.get(projects_url, headers=headers)
    
    if response.status_code == 200:
        existing_projects = response.json().get("results", [])
        project_id = None
        
        # Cari proyek yang sudah ada
        for proj in existing_projects:
            if proj["name"] == project_data["name"]:
                project_id = proj["id"]
                print(f"Proyek '{project_data['name']}' sudah ada, melanjutkan dengan penambahan issue...")
                break
        
        if project_id:
            # Dapatkan daftar issue yang sudah ada
            existing_issues = get_existing_issues(project_id)
            
            # Tambahkan issue yang belum ada
            issue_url = f"{base_url}/{workspace_slug}/projects/{project_id}/issues/"
            for issue in project_data["issues"]:
                if issue["name"] not in existing_issues:
                    issue_response = requests.post(
                        issue_url,
                        json={"name": issue["name"]},
                        headers=headers
                    )
                    if issue_response.status_code == 201:
                        print(f"Issue '{issue['name']}' berhasil ditambahkan!")
                    else:
                        print(f"Gagal menambahkan issue '{issue['name']}': {issue_response.text}")
                else:
                    print(f"Issue '{issue['name']}' sudah ada, melewati...")
        else:
            # Buat proyek baru jika belum ada
            response = requests.post(
                projects_url,
                json={
                    "name": project_data["name"],
                    "identifier": project_data["identifier"],
                    "description": project_data["description"]
                },
                headers=headers
            )
            
            if response.status_code == 201:
                print(f"Proyek '{project_data['name']}' berhasil dibuat!")
                project_id = response.json()["id"]
                
                # Tambahkan issue untuk proyek baru
                issue_url = f"{base_url}/{workspace_slug}/projects/{project_id}/issues/"
                for issue in project_data["issues"]:
                    issue_response = requests.post(
                        issue_url,
                        json={"name": issue["name"]},
                        headers=headers
                    )
                    if issue_response.status_code == 201:
                        print(f"Issue '{issue['name']}' berhasil ditambahkan!")
                    else:
                        print(f"Gagal menambahkan issue '{issue['name']}': {issue_response.text}")
            else:
                print(f"Gagal membuat proyek '{project_data['name']}': {response.text}")

# Jalankan untuk setiap proyek
for project in projects_data:
    create_or_update_project(project)
