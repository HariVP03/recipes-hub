import AWS from "aws-sdk";

export function initialiseAWS() {
  AWS.config.update({
    region: "us-east-1",
    accessKeyId: "ASIARCKI7BVG6ITXK3G3",
    secretAccessKey: "ImESYnT8TKGiIisSGZ7uGRKYDBaBibkSYCbKhTfY",
    sessionToken:
      "FwoGZXIvYXdzELj//////////wEaDBTnF6F0b0RXgiEZSiLZAZb2L83e2fvs3lTyPnQS1/0BUzow+wuglN+jRJtJv6hXU34lePbZ7fRQIonRtM5DLOayY+lI4x3iF05xgo90B8sigh6CRYUn8/hlm9hyrR3K6sLrD+xmqrU1EnWyjTg0dNxUNzZumFw/eu3Q5F85D3hlDwLXHw8v2ldTzZgchvSQXAvssHTqvpdpLQNvybROmqjopMsjgJ4H1eKAfnT7eVgDpSt5R7maGi7gWzBTMs6xVNTrGWUd95E8TEs7QfRccR4NuPTIPH10h/wY82xxUTHrOel2+1NgMugo8IemqwYyLUYjz6kza6etmEjFX3CcH/b8WNB/IUvpgYEdNS+Yv6+qCFsl3BOKve4bngqH5A==",
  });
}
