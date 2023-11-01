import React, { useState } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import {
  Box,
  Container,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { makeStyles } from "@mui/styles";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const useStyles = makeStyles((theme) => ({
  circleButton: {
    borderRadius: "50%",
    width: "80px",
    height: "80px",
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.3) !important",
    marginBottom: 100,
    cursor: "pointer", // Add cursor pointer for better UX
  },
  arrowIcon: {
    fontSize: "36px",
    color: "black",
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  padding: "80px 100px",

  textAlign: "center",
  color: theme.palette.text.secondary,
  border: "1px solid #F2F4F6",
  borderRadius: 20,
  background: "linear-gradient(0deg, #E7EBEB, #E7EBEB) ",
}));

const scrollToContent = () => {
  // Smooth scroll to the content section when the button is clicked
  const contentSection = document.getElementById("project-talk-button");
  if (contentSection) {
    contentSection.scrollIntoView({ behavior: "smooth" });
  }
};

const AllProjectItem = styled(Paper)(({ theme }) => ({
  padding: "5px 20px",
  textAlign: "center",
  marginBottom: -40,
  background: "#E7EBEB",
  boxShadow: "none",
}));

export default function WebDesignForm() {
  const classes = useStyles();
  
//   const [businessType, setBusinessType] = useState("");
//   const [hasLogoAndBrand, setHasLogoAndBrand] = useState("");
//   const [handleHosting, setHandleHosting] = useState("");
//   const [makeChangesAfterLaunch, setMakeChangesAfterLaunch] = useState("");
//   const [hasBrandBook, setHasBrandBook] = useState("");
//   const [hasColorTypographyPalette, setHasColorTypographyPalette] =
//     useState("");
//   const [providesContent, setProvidesContent] = useState("");
//   const [providesDesignElements, setProvidesDesignElements] = useState("");
//   const [hasMediaForDesign, setHasMediaForDesign] = useState("");
//   const [planPaidAdCampaign, setPlanPaidAdCampaign] = useState("");
//   const [hasDomain, setHasDomain] = useState("");
//   const [hasHosting, setHasHosting] = useState("");
//   const [businessDescription, setBusinessDescription] = useState("");
//   const [inspiration, setInspiration] = useState("");
//   const [currentWebsite, setCurrentWebsite] = useState("");
//   const [goal, setGoal] = useState("");
//   const [otherGoalDescription, setOtherGoalDescription] = useState("");
//   const [desiredAction, setDesiredAction] = useState("");
//   const [otherDesiredActionDescription, setOtherDesiredActionDescription] =
//     useState("");
// const [selectedSpecificFeature, setSelectedSpecificFeature] = useState("");
// const [otherFeatureDescription, setOtherFeatureDescription] = useState("");


const [formData, setFormData] = useState({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  emailFrequency: "",
  website: "",
  expectations: "",
  targetAudience: "",
  competitors: "",
  whatMakesDifferent: "",
  favoriteWebsites: "",
  timeline: "",
  budget: "",
  businessType: "",
  hasLogoAndBrand: "",
  handleHosting: "",
  makeChangesAfterLaunch: "",
  hasBrandBook: "",
  hasColorTypographyPalette: "",
  providesContent: "",
  providesDesignElements: "",
  hasMediaForDesign: "",
  planPaidAdCampaign: "",
  hasDomain: "",
  hasHosting: "",
  businessDescription: "",
  inspiration: "",
  currentWebsite: "",
  goal: "",
  otherGoalDescription: "",
  desiredAction: "",
  otherDesiredActionDescription: "",
  selectedSpecificFeature: "",
  otherFeatureDescription: "",
  // Add other fields here
});
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName) {
      newErrors.firstName = "First Name is required";
    }

    if (!formData.lastName) {
      newErrors.lastName = "Last Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (prop) => (event) => {
    setFormData({ ...formData, [prop]: event.target.value });
    setErrors({ ...errors, [prop]: "" }); // Clear the error for this field
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      // Add your form submission logic here
      console.log("Form submitted with data:", formData);
    } else {
      console.log("Form has validation errors");
    }
  };
  return (
    <>
      <AllProjectItem>
        <Container>
          <Typography
            variant="h2"
            style={{
              fontSize: "40px",
              lineHeight: "60px",
              fontWeight: 500,
              textAlign: "left",
              marginTop: 100,

              textTransform: "uppercase",
              color: "#000",
            }}
          >
            web design requirement form
          </Typography>

          <Grid container spacing={2} justify="flex-start">
            <Grid item>
              <Button
                variant="contained"
                style={{
                  marginTop: 30,
                  background: "#F14E4E",
                  padding: "10px 30px",
                  borderRadius: "15px",
                  fontSize: "16px",
                  marginBottom: 80,
                }}
              >
                Download form
              </Button>
            </Grid>
          </Grid>
        </Container>
      </AllProjectItem>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <IconButton
          className={classes.circleButton}
          onClick={scrollToContent} // Scroll to content when button is clicked
        >
          <ArrowDownwardIcon className={classes.arrowIcon} />
        </IconButton>
      </div>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <form onSubmit={handleSubmit}>
              <Grid item xs={12} sm={6}>
                <label htmlFor="firstName">First Name</label>
                <TextField
                  fullWidth
                  margin="normal"
                  label="Enter your first name"
                  variant="outlined"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange("firstName")}
                  required
                  error={!!errors.firstName}
                  helperText={errors.firstName}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <label htmlFor="">Last Name</label>

                <TextField
                  fullWidth
                  margin="normal"
                  label="Enter your last name"
                  variant="outlined"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange("lastName")}
                  required
                  error={!!errors.lastName}
                  helperText={errors.lastName}
                />

                <br />
              </Grid>
              <Grid item xs={12} sm={6}>
                <label htmlFor="">Email</label>
                <TextField
                  fullWidth
                  margin="normal"
                  label="Enter your email"
                  variant="outlined"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange("email")}
                  required
                  error={!!errors.email}
                  helperText={errors.email}
                />

                <br />
              </Grid>
              <Grid item xs={12} sm={6}>
                <label htmlFor="">How often you check email?</label>
                <TextField
                  fullWidth
                  margin="normal"
                  label="Enter your short answer"
                  variant="outlined"
                  id="emailFrequency"
                  name="emailFrequency"
                  value={formData.emailFrequency}
                  onChange={handleChange("emailFrequency")}
                />

                <br />
              </Grid>
              <Grid item xs={12} sm={6}>
                <label htmlFor="">Phone</label>
                <TextField
                  fullWidth
                  margin="normal"
                  label="Enter your Phone number"
                  variant="outlined"
                  type="number"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange("phone")}
                  required
                  // Add error and helperText as needed
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <label htmlFor="">Website (if you have)</label>
                <TextField
                  fullWidth
                  margin="normal"
                  label="Enter your Website"
                  variant="outlined"
                  id="website"
                  name="website"
                  type="url"
                  value={formData.website}
                  onChange={handleChange("website")}

                  // Add error and helperText as needed
                />

                <br />
              </Grid>

              <Grid item xs={12} sm={12}>
                <FormLabel>1. Is this a new or established business?</FormLabel>
                <RadioGroup
                  row
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange("businessType")}
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
                {errors.businessType && (
                  <span className="error">{errors.businessType}</span>
                )}
              </Grid>

              <Grid item xs={12} sm={12}>
                <FormLabel>
                  2. Do you have Logo and Brand already made?
                </FormLabel>
                <RadioGroup
                  row
                  name="hasLogoAndBrand"
                  value={formData.hasLogoAndBrand}
                  onChange={handleChange("hasLogoAndBrand")}
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
                {errors.hasLogoAndBrand && (
                  <span className="error">{errors.hasLogoAndBrand}</span>
                )}
              </Grid>

              <Grid item xs={12} sm={12}>
                <FormLabel>
                  3. Do you want to handle hosting, security, and maintenance on
                  your own?
                </FormLabel>
                <RadioGroup
                  row
                  name="handleHosting"
                  value={formData.handleHosting}
                  onChange={handleChange("handleHosting")}
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
                {errors.handleHosting && (
                  <span className="error">{errors.handleHosting}</span>
                )}
              </Grid>

              <Grid item xs={12} sm={12}>
                <FormLabel>
                  4. Do You Plan to Make Changes After Launch on your own/do you
                  need to be able to make edits or changes to your website on
                  your own?
                </FormLabel>
                <RadioGroup
                  row
                  name="makeChangesAfterLaunch"
                  value={formData.makeChangesAfterLaunch}
                  onChange={handleChange("makeChangesAfterLaunch")}
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
                {errors.makeChangesAfterLaunch && (
                  <span className="error">{errors.makeChangesAfterLaunch}</span>
                )}
              </Grid>

              <Grid item xs={12} sm={12}>
                <FormLabel>
                  5. Do You Have a Brand Book or Style Guide?
                </FormLabel>
                <RadioGroup
                  row
                  name="hasBrandBook"
                  value={formData.hasBrandBook}
                  onChange={handleChange("hasBrandBook")}
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
                {errors.hasBrandBook && (
                  <span className="error">{errors.hasBrandBook}</span>
                )}
              </Grid>

              <Grid item xs={12} sm={12}>
                <FormLabel>
                  6. Do You Have a Color or Typography Palette?
                </FormLabel>
                <RadioGroup
                  row
                  name="hasColorTypographyPalette"
                  value={formData.hasColorTypographyPalette}
                  onChange={handleChange("hasColorTypographyPalette")}
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
                {errors.hasColorTypographyPalette && (
                  <span className="error">
                    {errors.hasColorTypographyPalette}
                  </span>
                )}
              </Grid>

              <Grid item xs={12} sm={12}>
                <FormLabel>
                  7. Do you provide content for the website?
                </FormLabel>
                <RadioGroup
                  row
                  name="providesContent"
                  value={formData.providesContent}
                  onChange={handleChange("providesContent")}
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
                {errors.providesContent && (
                  <span className="error">{errors.providesContent}</span>
                )}
              </Grid>
              <Grid item xs={12} sm={12}>
                <FormLabel>
                  8. Do you provide design elements for the website (image, icon
                  etc.)?
                </FormLabel>
                <RadioGroup
                  row
                  name="providesDesignElements"
                  value={formData.providesDesignElements}
                  onChange={handleChange("providesDesignElements")}
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
                {errors.providesDesignElements && (
                  <span className="error">{errors.providesDesignElements}</span>
                )}
              </Grid>
              <Grid item xs={12} sm={12}>
                <FormLabel>
                  9. Do you have photos, video, or illustrations that will be a
                  part of the design?
                </FormLabel>
                <RadioGroup
                  row
                  name="hasMediaForDesign"
                  value={formData.hasMediaForDesign}
                  onChange={handleChange("hasMediaForDesign")}
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
                {errors.hasMediaForDesign && (
                  <span className="error">{errors.hasMediaForDesign}</span>
                )}
              </Grid>

              <Grid item xs={12} sm={12}>
                <FormLabel>
                  10. Do you plan to run a paid ad campaign on this website?
                </FormLabel>
                <RadioGroup
                  row
                  name="planPaidAdCampaign"
                  value={formData.planPaidAdCampaign}
                  onChange={handleChange("planPaidAdCampaign")}
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
                {errors.planPaidAdCampaign && (
                  <span className="error">{errors.planPaidAdCampaign}</span>
                )}
              </Grid>

              <Grid item xs={12} sm={12}>
                <FormLabel>11. Do you have a domain?</FormLabel>
                <RadioGroup
                  row
                  name="hasDomain"
                  value={formData.hasDomain}
                  onChange={handleChange("hasDomain")}
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
                {errors.hasDomain && (
                  <span className="error">{errors.hasDomain}</span>
                )}
              </Grid>

              <Grid item xs={12} sm={12}>
                <FormLabel>12. Do you have hosting?</FormLabel>
                <RadioGroup
                  row
                  name="hasHosting"
                  value={formData.hasHosting}
                  onChange={handleChange("hasHosting")}
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
                {errors.hasHosting && (
                  <span className="error">{errors.hasHosting}</span>
                )}
              </Grid>

              <Grid item xs={12} sm={12}>
                <FormLabel>
                  13. Describe your business in a few sentences/What Does Your
                  Business Do?
                </FormLabel>
                <TextField
                  id="business-description"
                  label="Enter your short answer"
                  multiline
                  rows={3} // You can adjust the number of rows as needed
                  cols={5}
                  variant="outlined"
                  fullWidth
                  value={formData.businessDescription}
                  onChange={handleChange("businessDescription")}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <FormLabel>
                  14. What’s the inspiration behind this project?
                </FormLabel>
                <TextField
                  id="inspiration"
                  label="Enter your short answer"
                  multiline
                  rows={3} // You can adjust the number of rows as needed
                  cols={5}
                  variant="outlined"
                  fullWidth
                  value={formData.inspiration}
                  onChange={handleChange("inspiration")}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <FormLabel>
                  15. Do you currently have a website? If so, what is/isn’t
                  working for you?
                </FormLabel>
                <TextField
                  id="current-website"
                  label="Enter your short answer"
                  multiline
                  rows={3} // You can adjust the number of rows as needed
                  cols={5}
                  variant="outlined"
                  fullWidth
                  value={formData.currentWebsite}
                  onChange={handleChange("currentWebsite")}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <FormLabel>
                  16. What are your goals for this project/What are you trying
                  to achieve?
                </FormLabel>
                <RadioGroup
                  value={formData.goal}
                  onChange={handleChange("goal")}
                >
                  <FormControlLabel
                    value="Contact you through your website"
                    control={<Radio />}
                    label="Contact you through your website"
                  />
                  <FormControlLabel
                    value="Get more customers"
                    control={<Radio />}
                    label="Get more customers"
                  />
                  <FormControlLabel
                    value="Get more leads"
                    control={<Radio />}
                    label="Get more leads"
                  />
                  <FormControlLabel
                    value="Others (Please specify):"
                    control={<Radio />}
                    label="Others (Please specify):"
                  />
                </RadioGroup>

                {formData.goal === "Others (Please specify):" && (
                  <TextField
                    id="other-goal-description"
                    label="Enter your short answer"
                    multiline
                    rows={3}
                    cols={5}
                    variant="outlined"
                    fullWidth
                    value={formData.otherGoalDescription}
                    onChange={handleChange("otherGoalDescription")}
                  />
                )}
              </Grid>
              <Grid item xs={12} sm={12}>
                <FormLabel>
                  17. What are your expectations from this website?
                </FormLabel>
                <TextField
                  id="outlined-multiline-static-expectations"
                  label="Enter your short answer"
                  multiline
                  rows={3}
                  variant="outlined"
                  fullWidth
                  name="expectations"
                  value={formData.expectations}
                  onChange={handleChange("expectations")}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <FormLabel>18. Who is your target audience/customer?</FormLabel>
                <TextField
                  id="outlined-multiline-static-target-audience"
                  label="Enter your short answer"
                  multiline
                  rows={3}
                  variant="outlined"
                  fullWidth
                  name="targetAudience"
                  value={formData.targetAudience}
                  onChange={handleChange("targetAudience")}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <FormLabel>
                  19. What Do You Want People to Do on Your Website?
                </FormLabel>
                <RadioGroup
                  value={formData.desiredAction}
                  onChange={handleChange("desiredAction")}
                >
                  <FormControlLabel
                    value="Contact you through your website"
                    control={<Radio />}
                    label="Contact you through your website"
                  />
                  <FormControlLabel
                    value="Get phone calls through your website"
                    control={<Radio />}
                    label="Get phone calls through your website"
                  />
                  <FormControlLabel
                    value="Click a link to learn something or get information"
                    control={<Radio />}
                    label="Click a link to learn something or get information"
                  />
                  <FormControlLabel
                    value="Buy a product or service"
                    control={<Radio />}
                    label="Buy a product or service"
                  />
                  <FormControlLabel
                    value="Fill out a form"
                    control={<Radio />}
                    label="Fill out a form"
                  />
                  <FormControlLabel
                    value="Register for an event"
                    control={<Radio />}
                    label="Register for an event"
                  />
                  <FormControlLabel
                    value="Download an app"
                    control={<Radio />}
                    label="Download an app"
                  />
                  <FormControlLabel
                    value="Share something via email or social media"
                    control={<Radio />}
                    label="Share something via email or social media"
                  />
                  <FormControlLabel
                    value="Others (Please specify):"
                    control={<Radio />}
                    label="Others (Please specify):"
                  />
                </RadioGroup>
                {formData.desiredAction === "Others (Please specify):" && (
                  <TextField
                    id="other-desired-action-description"
                    label="Enter your short answer"
                    multiline
                    rows={3}
                    cols={5}
                    variant="outlined"
                    fullWidth
                    value={formData.otherDesiredActionDescription}
                    onChange={handleChange("otherDesiredActionDescription")}
                  />
                )}
              </Grid>
              <Grid item xs={12} sm={12}>
                <FormLabel id="demo-radio-buttons-group-label">
                  20. What specific features do you want on the site?
                </FormLabel>
                <RadioGroup
                  value={formData.selectedSpecificFeature}
                  onChange={handleChange("selectedSpecificFeature")}
                >
                  <FormControlLabel
                    value="Blog"
                    control={<Radio />}
                    label="Blog"
                  />
                  <FormControlLabel
                    value="Contact form setup"
                    control={<Radio />}
                    label="Contact form setup"
                  />
                  <FormControlLabel
                    value="Appointment system integration"
                    control={<Radio />}
                    label="Appointment system integration"
                  />
                  <FormControlLabel
                    value="Booking system integration"
                    control={<Radio />}
                    label="Booking system integration"
                  />
                  <FormControlLabel
                    value="Translate in multiple language"
                    control={<Radio />}
                    label="Translate in multiple language"
                  />
                  <FormControlLabel
                    value="Payment system integration"
                    control={<Radio />}
                    label="Payment system integration"
                  />

                  <FormControlLabel
                    value="Others (Please specify):"
                    control={<Radio />}
                    label="Others (Please specify):"
                  />
                </RadioGroup>
                {formData.selectedSpecificFeature ===
                  "Others (Please specify):" && (
                  <TextField
                    id="outlined-multiline-static"
                    label="Enter your short answer"
                    multiline
                    rows={3}
                    cols={5}
                    variant="outlined"
                    fullWidth
                    value={formData.otherFeatureDescription}
                    onChange={handleChange("otherFeatureDescription")}
                  />
                )}
              </Grid>
              <Grid item xs={12} sm={12}>
                <FormLabel>
                  21. Who are your main competitors? Please provide website URL
                  of your competitors.
                </FormLabel>
                <TextField
                  id="outlined-multiline-static-competitors"
                  label="Enter your short answer"
                  multiline
                  rows={2}
                  variant="outlined"
                  fullWidth
                  name="competitors"
                  value={formData.competitors}
                  onChange={handleChange("competitors")}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <FormLabel>
                  22. What makes you different from your competitors/What Makes
                  Your Company Special/What are the strengths of your company?
                  <br />
                  This doesn’t have to be anything major; it can be as simple as
                  a free consultation or awesome customer service. Other things
                  that make businesses stand out include speedy or free delivery
                  on products, stocking the cheapest or best quality products in
                  their area, having an amazing guarantee or returns procedure,
                  or offering unique packages.
                </FormLabel>
                <TextField
                  id="outlined-multiline-static-different"
                  label="Enter your short answer"
                  multiline
                  rows={3}
                  variant="outlined"
                  fullWidth
                  name="whatMakesDifferent"
                  value={formData.whatMakesDifferent}
                  onChange={handleChange("whatMakesDifferent")}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <FormLabel>
                  23. What Are 3 Websites You Really Love? Why do each of these
                  aspirational websites appeal to you?
                </FormLabel>
                <TextField
                  id="outlined-multiline-static-websites"
                  label="Enter your short answer"
                  multiline
                  rows={3}
                  variant="outlined"
                  fullWidth
                  name="favoriteWebsites"
                  value={formData.favoriteWebsites}
                  onChange={handleChange("favoriteWebsites")}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <FormLabel>
                  24. What’s Your Timeline? Is the timeline flexible?
                </FormLabel>
                <TextField
                  id="outlined-multiline-static-timeline"
                  label="Enter your short answer"
                  multiline
                  rows={1}
                  variant="outlined"
                  fullWidth
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange("timeline")}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <FormLabel>
                  25. How much are you willing to spend on this project?
                </FormLabel>
                <TextField
                  id="outlined-multiline-static-budget"
                  label="Enter your short answer"
                  multiline
                  rows={1}
                  variant="outlined"
                  fullWidth
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange("budget")}
                  required
                />
              </Grid>
              <Button
                type="submit"
                variant="contained"
                style={{
                  background: "#F14E4E",
                  padding: "12px 35px",
                  borderRadius: "15px",
                  marginTop: 15,
                  marginBottom: 15,
                }}
              >
                SUBMIT
              </Button>
            </form>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
