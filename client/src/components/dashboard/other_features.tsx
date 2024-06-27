import Link from "next/link";
import { Home, PenTool, Calendar, Mic } from "lucide-react";

const routes = [
  {
    icon: Home,
    name: "Questões",
    path: "/questoes",
    description: "Visite nosso banco de questões.",
  },
  {
    icon: Mic,
    name: "IA de Inglês",
    path: "/speech",
    description: "Aprenda Inglês conversando com nossa IA.",
  },
  {
    icon: PenTool,
    name: "Redações",
    path: "/redacoes",
    description: "Corrija suas redações em minutos com nossa IA.",
  },
  {
    icon: Calendar,
    name: "Cronograma",
    path: "/cronograma",
    description: "Veja seu cronograma detalhadamente.",
  },
];

const OtherFeatures = () => {
  return (
    <div className="m-2 rounded-md border bg-gray-800 p-2">
      <h3 className="mx-4 mt-1 text-xl font-bold">Outras funcionalidades:</h3>
      <div className="flex flex-wrap">
        {routes.map((route) => (
          <div key={route.path} className="w-full p-2 sm:w-1/2 md:w-1/3 lg:w-1/4">
            <Link href={route.path}>
              <div className="block overflow-hidden rounded-lg border h-full text-white shadow-md transition hover:scale-105 hover:border-primary hover:bg-gray-700 hover:shadow-xl">
                <div className="p-4">
                  <route.icon className="h-12 w-12" />
                  <h4 className="mt-4 text-lg font-semibold">{route.name}</h4>
                  <p className="mt-2 text-sm">{route.description}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherFeatures;
