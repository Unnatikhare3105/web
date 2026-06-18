// app/page.tsx
import HomePage from './home-page/page';
import JobCategories from './components/JobCategories';
import JobListingSection from './components/JobListingSection';

export default function Home() {
  return (
    <>
      <HomePage />
      <JobCategories />
      <JobListingSection />
    </>
  );
}
