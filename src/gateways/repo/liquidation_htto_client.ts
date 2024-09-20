import { OfertasModelResponse } from "../../shared/models/ofertas_response.model";
import { TesteEqSeedHttp } from "../teste_eqseed_http";

export class Liquidation_Http_Client {
  private http = new TesteEqSeedHttp();

  getListContratada = async () => {
    const reponse = await this.http.get<OfertasModelResponse[]>("oferta");

    return reponse.data;
  };
}
