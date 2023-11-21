import api from "@/http";
import FeatureCard from "./FeatureCard";

export default async function Integrations() {
  const integrations = await api.integration.getIntegration();
  return (
    <div className="container px-5 py-10 mx-auto">
      <div className="flex md:flex-row flex-col -m-4">
        {integrations &&
          integrations.length > 0 &&
          integrations.map((integration) => (
            <FeatureCard key={integration._id} integration={integration} />
          ))}
      </div>
    </div>
  );
}
