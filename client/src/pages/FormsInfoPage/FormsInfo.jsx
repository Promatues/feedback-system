import { useEffect } from "react";
import { application_config } from "../../services/application_config";
import { Container, Typography, Box } from "@mui/material";
import "./FormsInfo.css";

function FormsInfo() {
  useEffect(() => {
    document.title = `${application_config.application_name} - FormsInfo`;
    console.log(
      "[%cDebug%c] Navigated to Forms",
      "color: purple; font-weight: bold;",
      "color: black;"
    );
  }, []);

  return (
    <div>
        <Container sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
            <Box sx={{ backgroundColor: '#c4bfac', borderRadius: 5, padding: 2, width: 1000 }}>
            <Container sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                <Typography component="div" sx={{ marginRight: 30, fontWeight: 700, fontSize: 30 }}>
                Customer Satisfastion Survey for Cucina de Mariquina
                </Typography>
                <Typography className="FormResult" component="div" sx={{ fontWeight: 700, fontSize: 30, marginRight: 10, border: 2, borderRadius: 3, padding: 2, backgroundColor: '#A8A599' }}>
                Result
                </Typography>
            </Container>
            </Box>
        </Container>

        <Container sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}>
        <Box sx={{ display: 'flex', borderRadius: 1, border: 2, rowGap: 0 }}>
          <Box>
          <svg fill="#000000" viewBox="0 0 52 52" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M26,16a8,8,0,1,1,8-8A8,8,0,0,1,26,16ZM26,4a4,4,0,1,0,4,4A4,4,0,0,0,26,4Z"></path><path d="M26,34a8,8,0,1,1,8-8A8,8,0,0,1,26,34Zm0-12a4,4,0,1,0,4,4A4,4,0,0,0,26,22Z"></path><path d="M26,52a8,8,0,1,1,8-8A8,8,0,0,1,26,52Zm0-12a4,4,0,1,0,4,4A4,4,0,0,0,26,40Z"></path></g></svg>
          </Box>
          <Box sx={{ backgroundColor: '#d9d9d9', padding: 2, minWidth: 150, backgroundColor: '#BAB9AF' }}>
            <Typography component="div" variant="h5" sx={{ marginBottom: 2, minWidth: 150, textAlign: 'center' }}>
              Response ID
            </Typography>
            <Typography component="div" className="formName" sx={{ fontSize:25, textAlign: 'center' }}>
              1
            </Typography>
          </Box>
          <Box sx={{ backgroundColor: '#d9d9d9', padding: 2, minWidth: 300, textAlign: 'center', backgroundColor: '#BAB9AF' }}>
            <Typography component="div" variant="h5" sx={{ marginBottom: 2 }}>
              Timestamp
            </Typography>
            <Typography component="div" sx={{ fontSize: 30 }}>
              --
            </Typography>
          </Box>
          <Box sx={{ backgroundColor: '#d9d9d9', padding: 2, minWidth: 350, backgroundColor: '#BAB9AF', textAlign: 'center' }}>
            <Typography component="div" variant="h5" sx={{ marginBottom: 2 }}>
              Respondent Email
            </Typography>
            <Typography component="div" style={{ wordBreak: 'break-all', fontSize:18, textAlign: 'center' }}>
              example@gmail.com
            </Typography>
          </Box>
        </Box>
      </Container>
    </div>


    
  );
}

export default FormsInfo;