import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface CoffeeRecommendationProps {
  recommendation: string;
}

const CoffeeRecommendation: React.FC<CoffeeRecommendationProps> = ({ recommendation }) => {
  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-center">Your Perfect Brew</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-center text-lg">
          Based on your preferences, we recommend:
          <span className="block mt-2 text-2xl font-bold text-amber-600">{recommendation}</span>
        </p>
      </CardContent>
    </Card>
  );
};

export default CoffeeRecommendation;