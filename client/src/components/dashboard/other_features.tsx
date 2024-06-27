import Link from "next/link";
import {
  Home,
  BookOpen,
  PenTool,
  Calendar,
  Mic,
  LayoutDashboard,
} from "lucide-react";

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
    path: "/speech",
    description: "Corrija suas redações em minutos com nossa IA.",
  },
  {
    icon: Calendar,
    name: "Cronograma",
    path: "/speech",
    description: "Veja seu cronograma detalhadamente.",
  },
  // Add more routes as needed
];

const OtherFeatures = () => {
  return (
    <div className=" m-2 rounded-md border bg-background p-3">
      <h3 className="mx-4  text-xl font-bold mt-1">Outras funcionalidades:</h3>
      <div className="flex flex-wrap">
        {routes.map((route) => (
          <div
            key={route.path}
            className="w-full p-4 sm:w-1/2 md:w-1/3 lg:w-1/4"
          >
            <Link href={route.path}>
              <p className="block overflow-hidden rounded-lg border bg-background text-foreground shadow-md hover:scale-105  hover:border-primary transition hover:bg-black/10 hover:shadow-xl">
                <div className="p-4">
                  <route.icon className="h-12 w-12" />
                  <h4 className="mt-4 text-lg font-semibold">{route.name}</h4>
                  <p className="mt-2 text-sm">{route.description}</p>
                </div>
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherFeatures;
