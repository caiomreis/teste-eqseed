import axios from "axios";

export class TesteEqSeedHttp {
  private defaultUrl = "https://66d62a1ef5859a704268886b.mockapi.io/api/v1/";

  get = async <T>(path: string, url?: string) => {
    return await axios.get<T>(`${url ?? this.defaultUrl}/${path}`, {});
  };
  post = async (path: string, options?: { data?: any }) => {
    return await axios.post(
      `${this.defaultUrl}/${path}`,
      options!.data ?? {},
      {}
    );
  };
}
