import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hwxyhmblpixzftfaqfea.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh3eHlobWJscGl4emZ0ZmFxZmVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk1ODE4MDMsImV4cCI6MTk5NTE1NzgwM30.z4VWGW-Y5Lo8_zX8WnaNNkPNt5BbHDbga-uukGzxs3A';

const supabase = createClient(supabaseUrl, supabaseKey);

async function getData() {
    const res = await fetch('https://api.example.com/...');
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
  
    // Recommendation: handle errors
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }
  
    return res.json();
  }
  
  export default async function Page() {
    const data = await getData();
  
    return <main></main>;
  }