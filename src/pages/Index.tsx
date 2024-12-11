import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Coffee, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useToast } from '@/components/ui/use-toast'
import CoffeeRecommendation from '@/components/CoffeeRecommendation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Coffee, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import CoffeeRecommendation from '@/components/CoffeeRecommendation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  const [preferences, setPreferences] = useState('');
  const [recommendation, setRecommendation] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setRecommendation(null);

    try {
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      const coffeeTypes = ['Espresso', 'Latte', 'Cappuccino', 'Americano', 'Cold Brew'];
      const randomRecommendation = coffeeTypes[Math.floor(Math.random() * coffeeTypes.length)];
      setRecommendation(randomRecommendation);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to get recommendation. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">BrewMatch</CardTitle>
              <CardDescription className="text-center">
                Get personalized coffee recommendations powered by AI
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="preferences">Your Coffee Preferences</Label>
                    <Input
                      id="preferences"
                      placeholder="e.g., strong, mild, sweet, aromatic"
                      value={preferences}
                      onChange={(e) => setPreferences(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Getting Recommendation...
                      </>
                    ) : (
                      <>
                        <Coffee className="mr-2 h-4 w-4" />
                        Get Recommendation
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {recommendation && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8"
          >
            <CoffeeRecommendation recommendation={recommendation} />
          </motion.div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Index;