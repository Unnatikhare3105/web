// app/page.tsx
import HomePage from './home-page/page';
import JobCategories from './components/JobCategories';
import JobListingSection from './components/JobListingSection';
import ExploreSection from './components/ExploreSection';
import StatsSection from './components/StatSection';
import HowItWorks from './components/HowItWorks';
import PopularCandidates from './components/PopularCandidates';

export default function Home() {
  return (
    <>
      <HomePage />
      <JobCategories />
      <JobListingSection />
      <ExploreSection />
      <StatsSection />
      <HowItWorks />
      <PopularCandidates /> 
    </>
  );
}
