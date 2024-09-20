export interface OfertasModelResponse {
  nome_oferta: string;
  slogan: string;
  status: string;
  valor_a_ser_liquidado: number;
  validade: string;
  chave_pix: string;
  nome_favorecido: string;
  agencia: string;
  banco: string;
  numero_conta_corrente: string;
  cnpj: string;
  lista_anexos: ListaAnexo[];
  imagem_qrcode: string;
}

export interface ListaAnexo {
  nome_arquivo: string;
  url: string;
}
