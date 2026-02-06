import axios from "axios";
import https from "https";

const DRUPAL_BASE_URL = process.env.DRUPAL_BASE_URL;

// CRITICAL FIX: Create an HTTPS agent that ignores Lando's self-signed certificate.
const agent = new https.Agent({
  rejectUnauthorized: false,
});

export async function fetchDrupalData(path) {
  if (!DRUPAL_BASE_URL) {
    throw new Error("DRUPAL_BASE_URL is not set.");
  }
  const url = `${DRUPAL_BASE_URL}${path}`;

  try {
    const response = await axios.get(url, {
      // Tell Axios to use our special agent for this request
      httpsAgent: agent,
    });

    return response.data;
  } catch (error) {
    console.error(`--- CONNECTION FAILED ---`);
    console.error(`Error fetching from: ${url}`);

    if (error.message.includes("certificate")) {
      console.error(
        "HINT: This is likely the Lando SSL certificate issue. Ensure you've restarted after making the HTTPS agent changes."
      );
    } else {
      console.error(error.message);
    }
    console.error(`-------------------------`);
    return {};
  }
}
