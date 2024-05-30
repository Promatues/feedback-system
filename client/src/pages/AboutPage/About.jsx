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
      Hello
    </div>
  );
}

export default About;
