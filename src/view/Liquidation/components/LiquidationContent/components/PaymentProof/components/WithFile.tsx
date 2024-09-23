import { DropzoneInputProps } from "react-dropzone";
import TesteIcon from "../../../../../../../components/testeIcons";
import { Body3, Body4 } from "../../../../../../../components/text/body/style";
import { Heading5 } from "../../../../../../../components/text/heading/style";
import {
  FilesModel,
  removeAllProofFiles,
  removeProofFiles,
} from "../../../../../../../store/ofertas_slice";
import { useAppDispatch } from "../../../../../../../store/store";
import testeeqseed_theme from "../../../../../../../style/theme_colors";
import { FileCardContet, WithFileContent } from "../style";

const WithFile: React.FC<{
  files: FilesModel[];
  getInput: <T extends DropzoneInputProps>(props?: T) => T;
}> = ({ files, getInput }) => {
  const dispatch = useAppDispatch();
  return (
    <WithFileContent>
      <div className="header">
        <Heading5 color={testeeqseed_theme.theme.green.strong} fontWeight={700}>
          Arquivos anexados
        </Heading5>
        <Body4 color={testeeqseed_theme.theme.grey.strong}>
          Arquivos permitidos: .PDF, JPEG ou .PNG - Max 25mb
        </Body4>
      </div>
      <div className="file_content" tabIndex={-2}>
        {files.map((el) => (
          <FileCard
            name={el.name}
            onTap={() => {
              dispatch(removeProofFiles(el.name));
            }}
          />
        ))}
      </div>
      <div className="buttons">
        <div {...getInput()}>
          <button className="grey">
            <Body3 color={testeeqseed_theme.theme.green.strong}>
              ADICIONAR ARQUIVO
            </Body3>
            <TesteIcon
              icon="attachment"
              color={testeeqseed_theme.theme.green.strong}
              size={30}
            />
          </button>
        </div>
        <button
          className="green"
          onClick={() => {
            alert("Arquivos enviados!");
            dispatch(removeAllProofFiles());
          }}
        >
          <Body3 color={testeeqseed_theme.theme.white}>FINALIZAR ENVIO</Body3>
        </button>
      </div>
    </WithFileContent>
  );
};
const FileCard: React.FC<{ name: string; onTap: () => void }> = ({
  name,
  onTap,
}) => {
  return (
    <FileCardContet>
      <div className="text">
        <Body4 color={testeeqseed_theme.theme.green.strong} fontWeight={600}>
          {name}
        </Body4>
      </div>
      <TesteIcon
        onTap={onTap}
        icon="close"
        color={testeeqseed_theme.theme.green.strong}
        size={20}
      />
    </FileCardContet>
  );
};
export default WithFile;
