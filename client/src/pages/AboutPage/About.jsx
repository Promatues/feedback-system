import React, { useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import { application_config } from "../../services/application_config";
import { Log } from "../../helpers/loghelpers";


function About() {
  useEffect(() => {
    document.title = `${application_config.application_name} - About Page`;
    Log.debug("Navigated to About.");
  }, []);

  return (
    <div>
      <Box sx={{ borderRadius: 4, border:"solid", border: 1, padding: 38, margin: 1, backgroundColor: '#D9D9D9', display: 'flex' }}>

      </Box>
    </div>
  );
}

export default About;
