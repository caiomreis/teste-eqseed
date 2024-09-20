import TesteIcon from "../../../../../../../components/testeIcons";
import { Heading4 } from "../../../../../../../components/text/heading/style";
import testeeqseed_theme from "../../../../../../../style/theme_colors";
import { LeaveFileContent } from "../style";

const LeaveFile: React.FC = () => {
  return (
    <LeaveFileContent>
      <div className="text_content">
        <TesteIcon
          icon="download"
          color={testeeqseed_theme.theme.green.strong}
          size={40}
        />
        <div className="drop_file_text">
          <Heading4
            color={testeeqseed_theme.theme.grey.strong}
            fontWeight={500}
          >
            Solte para anexar o(s) arquivo(s).
          </Heading4>
        </div>
      </div>
    </LeaveFileContent>
  );
};

export default LeaveFile;
