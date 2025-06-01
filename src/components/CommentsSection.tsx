
import React, { useState } from 'react';
import CommentCard from './CommentCard';
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Sample data for comments
const SAMPLE_COMMENTS = [
  {
    id: 1,
    name: "Ana Rodríguez",
    avatar: "",
    comment: "Excelente herramienta para la gestión empresarial. La inteligencia artificial realmente ha optimizado nuestros procesos internos.",
    rating: 5,
    date: "12 Mar 2025",
    sentiment: "positive"
  },
  {
    id: 2,
    name: "Carlos Mendoza",
    avatar: "",
    comment: "La integración con nuestros sistemas anteriores fue más compleja de lo esperado, pero el soporte técnico fue de gran ayuda.",
    rating: 3.5,
    date: "10 Mar 2025",
    sentiment: "neutral" 
  },
  {
    id: 3,
    name: "María González",
    avatar: "",
    comment: "Estoy impresionada con la facilidad de uso y la potencia de las herramientas de análisis. Ha superado mis expectativas.",
    rating: 4.5,
    date: "8 Mar 2025",
    sentiment: "positive"
  },
  {
    id: 4,
    name: "Luis Hernández",
    avatar: "",
    comment: "Tuvimos algunos problemas con la configuración inicial. La curva de aprendizaje es pronunciada para algunos usuarios.",
    rating: 2.5,
    date: "5 Mar 2025",
    sentiment: "negative"
  },
  {
    id: 5,
    name: "Laura Díaz",
    avatar: "",
    comment: "La atención al cliente es excelente, siempre responden rápido a nuestras dudas. El software ha mejorado nuestra productividad.",
    rating: 5,
    date: "1 Mar 2025",
    sentiment: "positive"
  },
  {
    id: 6,
    name: "Roberto Sánchez",
    avatar: "",
    comment: "El módulo de finanzas es muy completo, pero echo en falta algunas funcionalidades en la parte de recursos humanos.",
    rating: 3,
    date: "28 Feb 2025",
    sentiment: "neutral"
  }
];

const CommentsSection = () => {
  const [filter, setFilter] = useState("all");
  
  // Filter comments based on selected filter
  const filteredComments = SAMPLE_COMMENTS.filter(comment => {
    if (filter === "all") return true;
    return comment.sentiment === filter;
  });

  return (
    <section className="py-12 diagonal-bg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Comentarios y Sugerencias
            </h2>
            <p className="text-gray-600 mt-2">
              Opiniones de nuestros usuarios sobre Intelisis ERP 7000
            </p>
          </div>
          
          <div className="mt-4 md:mt-0 flex items-center">
            <span className="mr-2 text-sm text-gray-600">Filtrar por:</span>
            <Select defaultValue="all" onValueChange={setFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Todos los comentarios" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los comentarios</SelectItem>
                <SelectItem value="positive">Positivos</SelectItem>
                <SelectItem value="neutral">Neutrales</SelectItem>
                <SelectItem value="negative">Negativos</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredComments.map((comment) => (
            <CommentCard 
              key={comment.id}
              name={comment.name}
              avatar={comment.avatar}
              comment={comment.comment}
              rating={comment.rating}
              date={comment.date}
              sentiment={comment.sentiment as 'positive' | 'negative' | 'neutral'}
            />
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Button className="bg-intelisis-blue hover:bg-intelisis-darkblue text-white">
            Ver más comentarios
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CommentsSection;
