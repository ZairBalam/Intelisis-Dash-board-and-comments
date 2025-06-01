
import React from 'react';
import { MessageCircle, Star, TrendingUp, Users } from 'lucide-react';
import StatisticsCard from './StatisticsCard';
import SatisfactionChart from './charts/SatisfactionChart';
import SentimentChart from './charts/SentimentChart';

const Dashboard = () => {
  return (
    <section className="bg-intelisis-gray py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Análisis de Comentarios</h2>
            <p className="text-gray-600 mt-2">
              Estadísticas relevantes basadas en la retroalimentación de los usuarios
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-intelisis-blue text-white">
              Actualizado: Mayo 2025
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatisticsCard
            title="Calificación Promedio"
            value="4.3 / 5"
            icon={<Star className="h-6 w-6" />}
            trend={{ value: 0.5, isPositive: true }}
          />
          <StatisticsCard
            title="Total de Comentarios"
            value="1,248"
            icon={<MessageCircle className="h-6 w-6" />}
            trend={{ value: 12, isPositive: true }}
          />
          <StatisticsCard
            title="Usuarios Activos"
            value="328"
            icon={<Users className="h-6 w-6" />}
            trend={{ value: 5, isPositive: true }}
          />
          <StatisticsCard
            title="Índice de Satisfacción"
            value="89%"
            icon={<TrendingUp className="h-6 w-6" />}
            trend={{ value: 7, isPositive: true }}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SatisfactionChart />
          <SentimentChart />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
