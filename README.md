
# Anti-Counterfeiting-Tracebility-detection-System Performance Testing using JMeter

This repository contains performance testing scripts and reports for the Anti-Counterfeiting-Tracebility-detection-System. The performance testing was carried out using Apache JMeter, a popular open-source tool for load testing, to evaluate the system's capability to handle concurrent requests and measure its performance under different loads.


## Overview
Anti-Counterfeiting-Tracebility-detection-System implements a blockchain system architecture to record ownership of the product in the Blockchain network. Two very important properties of blockchain are untraceability and the transparency. This fast system also makes the data error free.

URL: [https://fake-product-identification-using-blockchain-one.vercel.app/ ](https://fake-product-identification-using-blockchain-one.vercel.app/)

## Test Setup
The performance tests were conducted using JMeter with different levels of concurrency. Each test executed a specified number of concurrent requests with a fixed loop count to evaluate the system's response time, throughput, and error rate.

Step 1. Download the project from [Official Website](https://jmeter.apache.org/download_jmeter.cgi) and unzip it. Start JMeter and open the test file (.jmx file).

Step 2. To run the tests execute the following command 
```bash
jmeter -n -t <test JMX file> -l <test log file> -e -o <Path to output folder>
```

The following tests were performed:

1. 10 Concurrent Requests with 10 Loop Count:
- Average Transactions Per Second (TPS) for Total Samples: ~29
- Total Concurrent API Requests: 600

2. 100 Concurrent Requests with 10 Loop Count:
- Average TPS for Total Samples: ~202
- Total Concurrent API Requests: 6000

3. 500 Concurrent Requests with 10 Loop Count:
- Average TPS for Total Samples: ~758
- Total Concurrent API Requests: 30000

4. 1000 Concurrent Requests with 10 Loop Count:
- Average TPS for Total Samples: ~570
- Total Concurrent API Requests: 60000

5. 1300 Concurrent Requests with 10 Loop Count:
- Average TPS for Total Samples: ~750
- Total Concurrent API Requests: 78000

6. 1400 Concurrent Requests with 10 Loop Count:
- Average TPS for Total Samples: ~578
- Total Concurrent API Requests: 84000


## Test Result
During the test execution with 1400 concurrent requests, 324 requests experienced connection timeouts.

Please refer to these reports for a detailed analysis of response times, throughput, and other performance metrics observed during the tests.

## Conclusion
Based on the performance testing results, it can be concluded that the Anti Counterfeiting Tracebility detection System exhibits robust performance characteristics. The system showcases impressive scalability, handling thousands of concurrent API requests with a negligible error rate.
