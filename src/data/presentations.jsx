import { getSlides as getCorporateSlides, languages, defaultLanguage } from './slides'
import { getSlides as getTeamSlides } from './teamSlides'

export const presentations = [
  {
    id: 'corporate-swot',
    title: 'Halotec Strategic SWOT',
    description: 'Enterprise-level perspective for 2025',
    getSlides: getCorporateSlides
  },
  {
    id: 'm2m-team-swot',
    title: 'M2M Manager & Team SWOT',
    description: 'Team composition, SWOT, threats, and strategic priorities',
    getSlides: getTeamSlides
  }
]

export function getPresentationById(id) {
  return presentations.find((item) => item.id === id) ?? presentations[0]
}

export { languages, defaultLanguage }
