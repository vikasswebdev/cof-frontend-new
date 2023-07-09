import instance from "./axios";

export interface Integration {
  _id: string;
  title: string;
  description: string;
  slug: string;
}

const integration = {
  async getIntegration() {
    const { data } = await instance.get<Integration[]>("/api/integrations");
    return data;
  },
};

export default integration;
