"use client"
import { useState, useEffect } from 'react';

const stats = [
  { id: 1, name: 'Transactions every 24 hours', value: '44 million' },
  { id: 2, name: 'Assets under holding', value: '$119 trillion' },
  { id: 3, name: 'New users annually', value: '46,000' },
];

// Custom hook for counting animation
function useCountAnimation(endValue, duration = 2000) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('achievements-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    const numericValue = parseInt(endValue.replace(/[^0-9]/g, ''));
    const prefix = endValue.match(/^[^0-9]*/)?.[0] || '';
    const suffix = endValue.match(/[^0-9]*$/)?.[0] || '';

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const currentCount = Math.floor(progress * numericValue);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [endValue, duration, isVisible]);

  return count;
}

export default function Achivements() {
  return (
    <div id="achievements-section" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
          Our Achievement in Numbers
        </h2>
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => {
            const count = useCountAnimation(stat.value);
            const prefix = stat.value.match(/^[^0-9]*/)?.[0] || '';
            const suffix = stat.value.match(/[^0-9]*$/)?.[0] || '';

            return (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base/7 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {prefix}{count.toLocaleString()}{suffix}
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </div>
  );
}
