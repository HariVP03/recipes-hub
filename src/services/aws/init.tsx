import AWS from "aws-sdk";

export function initialiseAWS() {
  AWS.config.update({
    region: "us-east-1",
    accessKeyId: "ASIARCKI7BVGUEFJ2AOJ",
    secretAccessKey: "WVqUCh7ycPem4PsBeSvYBto9uE4R4RDOhQP+kWBQ",
    sessionToken:
      "FwoGZXIvYXdzELr//////////wEaDLVQKSPXplHuHCSkUyLZAUNqUNL1L6a3D8RXyHR/BFVC13LNbxaiuQP9XPXoGm//ofWeihATBzAtV86xUYnCVG7UExUjFN+ExIDi0j6mGyAmHB77caKmVx52Xin4GUpi4gPQ3LGhF8ucQy7rEmqQ/5Q+LEubOXTbJa+4iEJ/pNKykInXZBEtIRV8OHEhB/eic+tWZnUnl8OZffjlR/dw/slEHMNW8R9/m2HsclTyfBR1tGtWVpopZ/szcpH7Jo55p1/8w0M/9GeoWS9YeOiyFdJ4fUzUB+dU0RzJ2NRZYLd6B54zAMTcuT4ok7amqwYyLcLa3N+CmND35C6gPkrDwk6fll8U1PEfvGUYgu+suv/WuO5bEHnI8oftiqnF5w==",
  });
}
