import { Box, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { style } from "./style";
import faqdown from "../../../assets/images/faqdown.png";

const Faqs = () => {
  return (
    <Box sx={style.faqs}>
      <Typography sx={style.head}>FAQ</Typography>
      <Typography sx={style.title}>Unraveling the mysteries</Typography>
      <Box sx={style.accor}>
        <Accordion>
          <AccordionSummary
            expandIcon={<img src={faqdown} alt="exand less or more" />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Why is professional branding and web design important for a
            financial business?
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<img src={faqdown} alt="exand less or more" />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            How do I get started with your branding and web design services?
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<img src={faqdown} alt="exand less or more" />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            What makes your design services unique for the financial industry?
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<img src={faqdown} alt="exand less or more" />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            How does the design process work, and what is the typical timeline?
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<img src={faqdown} alt="exand less or more" />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Do you offer revisions, and how many are included in the package?
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<img src={faqdown} alt="exand less or more" />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            Is ongoing support included after the design work is complete?
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<img src={faqdown} alt="exand less or more" />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            What guarantees do you provide for your design services?
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<img src={faqdown} alt="exand less or more" />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            Do you offer hosting services for websites created through your
            service?
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Box sx={style.border}></Box>
      </Box>
    </Box>
  );
};

export default Faqs;
