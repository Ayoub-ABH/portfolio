// app/journey/[id]/page.js
'use client';

import React from 'react';
import JourneyDetail from '@/components/JourneyDetail';
import { useParams } from 'next/navigation';
import { journeyItems } from '@/data/journeyData';

export default function JourneyDetailPage() {
  const params = useParams();
  const id = params.id;
  
  // Find the journey item
  const journeyItem = journeyItems.find(item => item.id === id);
  
  return <JourneyDetail item={journeyItem} />;
}