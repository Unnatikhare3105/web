// app/page.tsx
import HomePage from './home-page/page';
import JobCategories from './components/JobCategories';
import JobListingSection from './components/JobListingSection';
import ExploreSection from './components/ExploreSection';

export default function Home() {
  return (
    <>
      <HomePage />
      <JobCategories />
      <JobListingSection />
      <ExploreSection />
    </>
  );
}
