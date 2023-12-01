import AWS from "aws-sdk";

export function initialiseAWS() {
  AWS.config.update({
    region: "us-east-1",
    accessKeyId: "ASIARCKI7BVG7NFK6FZ7",
    secretAccessKey: "mnWuYOxmPABmXTlsXD98aoQ3QLqd7UQtfvma3PfC",
    sessionToken:
      "FwoGZXIvYXdzELH//////////wEaDCRc+a7DSqooR+amSCLZAZdQFNU3LkZPuxwISIBR9KOMKytqWa95jh48C4gFj0hePZPSNme+4Hpxe7KnHZ/hh1O6pw0sW+uOrHTvASsC3+MsDwtqXw0FBf7+aLmQXifbqDMNltaarETuc/YOeiMVx3objcbKV1QIJqZmibZT0k5qw+OPKnpiTmrKov2lWw5v/3DArQmrQfspBDITNk00DXqzgS/uoA+vv7cfDSQ0F3qW20xG6GuM6eTWnKbmdGg2TbIL53+McfuurBNvH5zMZ4CTM53hcXLP47PvmVTSVnUgzevLtujbskEohrGkqwYyLfJgR5qTzayrR1YVD0CYIhywxzpWZdwFR8pqfY1LQfOB6mt89ZqFL2fIVbCu6A==",
  });
}
