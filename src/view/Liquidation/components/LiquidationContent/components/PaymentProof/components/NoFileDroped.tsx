import TesteIcon from "../../../../../../../components/testeIcons";
import { Body3 } from "../../../../../../../components/text/body/style";
import { Heading4 } from "../../../../../../../components/text/heading/style";
import testeeqseed_theme from "../../../../../../../style/theme_colors";
import { NoFileDropedContent } from "../style";

const NoFileDroped: React.FC = () => {
  return (
    <NoFileDropedContent>
      <div className="text_content">
        <TesteIcon
          icon="download"
          color={testeeqseed_theme.theme.green.strong}
          size={40}
        />
        <div className="no_file_text">
          <Heading4
            color={testeeqseed_theme.theme.grey.strong}
            fontWeight={500}
            textalign="center"
          >
            Anexe aqui seu(s) comprovantes(s) de pagamento.
          </Heading4>
          <Body3 color={testeeqseed_theme.theme.grey.strong}>
            Arquivos permitidos: .PDF, JPEG ou .PNG - Max 25mb
          </Body3>
        </div>
      </div>
      <button>
        <TesteIcon
          icon="attachment"
          color={testeeqseed_theme.theme.white}
          size={30}
        />
        <Body3 color={testeeqseed_theme.theme.white}>ANEXAR ARQUIVO</Body3>
      </button>
    </NoFileDropedContent>
  );
};

export default NoFileDroped;
