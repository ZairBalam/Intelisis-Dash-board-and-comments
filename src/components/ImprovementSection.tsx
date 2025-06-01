
import React, { useState } from 'react';
import CommentCard from './CommentCard';
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent 
} from "@/components/ui/card";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { AlertCircle, AlertTriangle } from 'lucide-react';

// Filtrar solo comentarios negativos y neutros
const IMPROVEMENT_COMMENTS = [
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
    id: 4,
    name: "Luis Hernández",
    avatar: "",
    comment: "Tuvimos algunos problemas con la configuración inicial. La curva de aprendizaje es pronunciada para algunos usuarios.",
    rating: 2.5,
    date: "5 Mar 2025",
    sentiment: "negative"
  },
  {
    id: 6,
    name: "Roberto Sánchez",
    avatar: "",
    comment: "El módulo de finanzas es muy completo, pero echo en falta algunas funcionalidades en la parte de recursos humanos.",
    rating: 3,
    date: "28 Feb 2025",
    sentiment: "neutral"
  },
  {
    id: 7,
    name: "Alejandra Gutiérrez",
    avatar: "",
    comment: "La interfaz móvil necesita mejoras urgentes, no es intuitiva y dificulta el trabajo remoto.",
    rating: 2,
    date: "25 Feb 2025",
    sentiment: "negative"
  },
  {
    id: 8,
    name: "Javier Morales",
    avatar: "",
    comment: "Los reportes personalizados son difíciles de configurar. Se necesita más documentación al respecto.",
    rating: 2.5,
    date: "20 Feb 2025",
    sentiment: "negative"
  }
];

const ImprovementSection = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  const filteredComments = IMPROVEMENT_COMMENTS.filter(comment => {
    if (activeTab === "all") return true;
    return comment.sentiment === activeTab;
  });

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <Card>
          <CardHeader className="bg-intelisis-blue bg-opacity-5 border-b">
            <div className="flex items-center gap-2">
              <AlertCircle className="text-intelisis-blue h-5 w-5" />
              <CardTitle className="text-xl text-gray-800">
                Áreas de Oportunidad
              </CardTitle>
            </div>
            <CardDescription>
              Comentarios negativos y neutros para identificar puntos de mejora en el sistema
            </CardDescription>
          </CardHeader>
          
          <CardContent className="pt-6">
            <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="mb-6">
                <TabsTrigger value="all" className="data-[state=active]:bg-intelisis-blue data-[state=active]:text-white">
                  Todos
                </TabsTrigger>
                <TabsTrigger value="neutral" className="data-[state=active]:bg-amber-500 data-[state=active]:text-white">
                  <AlertTriangle className="h-4 w-4 mr-1" />
                  Neutros
                </TabsTrigger>
                <TabsTrigger value="negative" className="data-[state=active]:bg-red-500 data-[state=active]:text-white">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  Negativos
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
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
              </TabsContent>
              
              <TabsContent value="neutral" className="mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
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
              </TabsContent>
              
              <TabsContent value="negative" className="mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
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
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ImprovementSection;
