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
          <Box className = 'formicon'>
            
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