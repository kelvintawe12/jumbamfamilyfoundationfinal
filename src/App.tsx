import { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
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
const NotFound = lazy(() => import('./pages/NotFound').then(module => ({ default: module.NotFound })));

// Enhanced loading component with hope theme - inspired by CheckMe's caring design
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
    <div className="flex flex-col items-center space-y-6">
      {/* Main spinner */}
      <motion.div
        className="relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-0 w-16 h-16 border-4 border-secondary border-b-transparent rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      {/* Loading text with typewriter effect */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center"
      >
        <motion.p
          className="text-gray-600 font-medium text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Restoring Hope...
        </motion.p>
        <motion.p
          className="text-gray-400 text-sm mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          Building bridges of compassion in Cameroon
        </motion.p>
      </motion.div>

      {/* Pulse animation for additional visual appeal */}
      <motion.div
        className="flex space-x-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 bg-primary rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>
    </div>
  </div>
);

// Page transition wrapper with enhanced animations
const PageTransition = ({ 
  children, 
  pageKey 
}: { 
  children: React.ReactNode; 
  pageKey: string 
}) => (
  <motion.div
    key={pageKey}
    initial={{ opacity: 0, y: 20, scale: 0.98 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: -20, scale: 0.98 }}
    transition={{ 
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
      layout: { duration: 0.4 }
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
    <Router>
      <AppRouter />
    </Router>
  );
}