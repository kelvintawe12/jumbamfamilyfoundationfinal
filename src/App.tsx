import { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from './components/layout/Layout';

// Lazy load pages for better performance - inspired by CheckMe's modular approach
const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const Story = lazy(() => import('./pages/Story').then(module => ({ default: module.Story })));
const Model = lazy(() => import('./pages/Model').then(module => ({ default: module.Model })));
const Impact = lazy(() => import('./pages/Impact').then(module => ({ default: module.Impact })));
const Crisis = lazy(() => import('./pages/Crisis').then(module => ({ default: module.Crisis })));
const CoreAreas = lazy(() => import('./pages/CoreAreas').then(module => ({ default: module.CoreAreas })));
const News = lazy(() => import('./pages/News').then(module => ({ default: module.News })));
const Contact = lazy(() => import('./pages/Contact').then(module => ({ default: module.Contact })));
const Donate = lazy(() => import('./pages/Donate').then(module => ({ default: module.Donate })));
const Scholarships = lazy(() => import('./pages/Scholarships').then(module => ({ default: module.Scholarships })));
const Scholars = lazy(() => import('./pages/Scholars').then(module => ({ default: module.Scholars })));
const Team = lazy(() => import('./pages/Team').then(module => ({ default: module.Team })));
const Partners = lazy(() => import('./components/Partners').then(module => ({ default: module.Partners })));
const NotFound = lazy(() => import('./pages/NotFound').then(module => ({ default: module.NotFound })));

// Minimal loading component for fast navigation
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
    <div className="flex flex-col items-center space-y-4">
      {/* Simplified spinner */}
      <motion.div
        className="w-8 h-8 border-3 border-primary border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Simple loading text */}
      <motion.p
        className="text-gray-600 font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        Loading...
      </motion.p>
    </div>
  </div>
);

// Page transition wrapper with fast animations
const PageTransition = ({ 
  children, 
  pageKey 
}: { 
  children: React.ReactNode; 
  pageKey: string 
}) => (
  <motion.div
    key={pageKey}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ 
      duration: 0.2,
      ease: "easeOut"
    }}
    className="w-full"
  >
    {children}
  </motion.div>
);

// Main App Router component
const AppRouter = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change for better UX
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Analytics or tracking can be added here
    console.log(`Navigated to: ${location.pathname}`);
  }, [location.pathname]);

  return (
    <Layout>
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          {/* Home Route */}
          <Route 
            path="/" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <PageTransition pageKey="home">
                  <Home />
                </PageTransition>
              </Suspense>
            } 
          />
          
          {/* Story Route */}
          <Route 
            path="/story" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <PageTransition pageKey="story">
                  <Story />
                </PageTransition>
              </Suspense>
            } 
          />
          
          {/* Model Route */}
          <Route 
            path="/model" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <PageTransition pageKey="model">
                  <Model />
                </PageTransition>
              </Suspense>
            } 
          />
          
          {/* Impact Route */}
          <Route 
            path="/impact" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <PageTransition pageKey="impact">
                  <Impact />
                </PageTransition>
              </Suspense>
            } 
          />
          
          {/* Crisis Route */}
          <Route 
            path="/crisis" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <PageTransition pageKey="crisis">
                  <Crisis />
                </PageTransition>
              </Suspense>
            } 
          />
          
          {/* Core Areas Route */}
          <Route 
            path="/core-areas" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <PageTransition pageKey="core-areas">
                  <CoreAreas />
                </PageTransition>
              </Suspense>
            } 
          />
          
          {/* News Route */}
          <Route 
            path="/news" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <PageTransition pageKey="news">
                  <News />
                </PageTransition>
              </Suspense>
            } 
          />
          
          {/* Contact Route */}
          <Route 
            path="/contact" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <PageTransition pageKey="contact">
                  <Contact />
                </PageTransition>
              </Suspense>
            } 
          />
          
          {/* Donate Route */}
          <Route 
            path="/donate" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <PageTransition pageKey="donate">
                  <Donate />
                </PageTransition>
              </Suspense>
            } 
          />
          
          {/* Partners Route */}
          <Route 
            path="/partners" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <PageTransition pageKey="partners">
                  <Partners />
                </PageTransition>
              </Suspense>
            } 
          />
          
          {/* Scholarships Route */}
          <Route 
            path="/scholarships" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <PageTransition pageKey="scholarships">
                  <Scholarships />
                </PageTransition>
              </Suspense>
            } 
          />
          
          {/* Scholars Route */}
          <Route 
            path="/scholars" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <PageTransition pageKey="scholars">
                  <Scholars />
                </PageTransition>
              </Suspense>
            } 
          />
          
          {/* Team Route */}
          <Route 
            path="/team" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <PageTransition pageKey="team">
                  <Team />
                </PageTransition>
              </Suspense>
            } 
          />
          
          {/* 404 Not Found Route */}
          <Route 
            path="*" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <PageTransition pageKey="not-found">
                  <NotFound />
                </PageTransition>
              </Suspense>
            } 
          />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
};

export function App() {
  useEffect(() => {
    // Global setup and initialization
    console.log('Jumbam Family Foundation Website Loaded - Restoring Hope in Cameroon');
    
    // Add any global event listeners or initialization here
    const handleOnlineStatus = () => {
      if (!navigator.onLine) {
        console.warn('App is offline');
      }
    };
    
    window.addEventListener('online', handleOnlineStatus);
    window.addEventListener('offline', handleOnlineStatus);

    // Set up global error handler
    const handleError = (event: ErrorEvent) => {
      console.error('Global error:', event.error);
    };
    
    window.addEventListener('error', handleError);

    return () => {
      window.removeEventListener('online', handleOnlineStatus);
      window.removeEventListener('offline', handleOnlineStatus);
      window.removeEventListener('error', handleError);
    };
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <AppRouter />
      </Router>
    </HelmetProvider>
  );
}