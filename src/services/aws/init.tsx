import AWS from "aws-sdk";

export function initialiseAWS() {
  AWS.config.update({
    region: "us-east-1",
    accessKeyId: "ASIARCKI7BVGVG52T7GU",
    secretAccessKey: "X5IvHqkpslc0Ouehne8SyFDUV1K3Vl03f5UK41W/",
    sessionToken: `FwoGZXIvYXdzEKX//////////wEaDOcox5mP6/Da/bS3nCLZAUS1jTgrlvCi7kerg9MT8fMW1StIOb5t1Lrso1VcHLF4FNPVVzkFOpq1EII7vWMbjCqDv52l6MB5GeksrJeeKURpiznczqMSBqqnb7LBpo0TGbAPWZfrHyAntc2pV3IPbmymuzYKkZzoD9rON2S1GTegOmAc2s/P5E4vlB5iS1vqyYqOmgtcaWFY6aqRlZm7aITXxesCh2Cwh0X3R/PW8ujg+7i9zuFfv3PxnAFVgupqc9T8nF+0OGBfy3Q6iVQTbgI5qZn7ckYss/TLdjlfWyaalsWOTA5rK8Io/NqhqwYyLQ7+QcDGV/CoXWjndB6WRY8Si619QpQxvjgHA9kEo7I/3zyf9CZm5Wi2dS1X2g==`,
  });
}
