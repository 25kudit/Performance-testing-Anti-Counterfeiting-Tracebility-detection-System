/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 104.0, "minX": 0.0, "maxY": 1249.0, "series": [{"data": [[0.0, 104.0], [0.1, 106.0], [0.2, 106.0], [0.3, 107.0], [0.4, 108.0], [0.5, 108.0], [0.6, 108.0], [0.7, 111.0], [0.8, 111.0], [0.9, 112.0], [1.0, 112.0], [1.1, 113.0], [1.2, 113.0], [1.3, 113.0], [1.4, 115.0], [1.5, 115.0], [1.6, 115.0], [1.7, 116.0], [1.8, 116.0], [1.9, 116.0], [2.0, 116.0], [2.1, 117.0], [2.2, 117.0], [2.3, 118.0], [2.4, 120.0], [2.5, 121.0], [2.6, 121.0], [2.7, 121.0], [2.8, 122.0], [2.9, 122.0], [3.0, 123.0], [3.1, 123.0], [3.2, 124.0], [3.3, 124.0], [3.4, 126.0], [3.5, 126.0], [3.6, 127.0], [3.7, 127.0], [3.8, 127.0], [3.9, 128.0], [4.0, 128.0], [4.1, 129.0], [4.2, 129.0], [4.3, 129.0], [4.4, 130.0], [4.5, 130.0], [4.6, 130.0], [4.7, 132.0], [4.8, 133.0], [4.9, 133.0], [5.0, 133.0], [5.1, 133.0], [5.2, 133.0], [5.3, 133.0], [5.4, 134.0], [5.5, 134.0], [5.6, 134.0], [5.7, 135.0], [5.8, 136.0], [5.9, 137.0], [6.0, 137.0], [6.1, 137.0], [6.2, 137.0], [6.3, 137.0], [6.4, 137.0], [6.5, 138.0], [6.6, 138.0], [6.7, 138.0], [6.8, 139.0], [6.9, 139.0], [7.0, 139.0], [7.1, 139.0], [7.2, 139.0], [7.3, 139.0], [7.4, 139.0], [7.5, 139.0], [7.6, 139.0], [7.7, 139.0], [7.8, 139.0], [7.9, 139.0], [8.0, 140.0], [8.1, 140.0], [8.2, 140.0], [8.3, 140.0], [8.4, 140.0], [8.5, 140.0], [8.6, 140.0], [8.7, 140.0], [8.8, 140.0], [8.9, 140.0], [9.0, 140.0], [9.1, 140.0], [9.2, 140.0], [9.3, 141.0], [9.4, 141.0], [9.5, 141.0], [9.6, 141.0], [9.7, 141.0], [9.8, 141.0], [9.9, 141.0], [10.0, 141.0], [10.1, 142.0], [10.2, 142.0], [10.3, 142.0], [10.4, 142.0], [10.5, 142.0], [10.6, 142.0], [10.7, 142.0], [10.8, 142.0], [10.9, 142.0], [11.0, 142.0], [11.1, 142.0], [11.2, 142.0], [11.3, 143.0], [11.4, 143.0], [11.5, 143.0], [11.6, 143.0], [11.7, 143.0], [11.8, 143.0], [11.9, 143.0], [12.0, 144.0], [12.1, 144.0], [12.2, 144.0], [12.3, 144.0], [12.4, 144.0], [12.5, 144.0], [12.6, 144.0], [12.7, 144.0], [12.8, 144.0], [12.9, 144.0], [13.0, 145.0], [13.1, 145.0], [13.2, 145.0], [13.3, 145.0], [13.4, 145.0], [13.5, 145.0], [13.6, 145.0], [13.7, 145.0], [13.8, 145.0], [13.9, 145.0], [14.0, 145.0], [14.1, 145.0], [14.2, 145.0], [14.3, 145.0], [14.4, 145.0], [14.5, 145.0], [14.6, 145.0], [14.7, 145.0], [14.8, 145.0], [14.9, 146.0], [15.0, 146.0], [15.1, 146.0], [15.2, 146.0], [15.3, 146.0], [15.4, 146.0], [15.5, 146.0], [15.6, 146.0], [15.7, 146.0], [15.8, 146.0], [15.9, 146.0], [16.0, 147.0], [16.1, 147.0], [16.2, 147.0], [16.3, 147.0], [16.4, 147.0], [16.5, 147.0], [16.6, 147.0], [16.7, 147.0], [16.8, 147.0], [16.9, 147.0], [17.0, 148.0], [17.1, 148.0], [17.2, 148.0], [17.3, 148.0], [17.4, 148.0], [17.5, 148.0], [17.6, 148.0], [17.7, 148.0], [17.8, 148.0], [17.9, 148.0], [18.0, 148.0], [18.1, 148.0], [18.2, 148.0], [18.3, 149.0], [18.4, 149.0], [18.5, 149.0], [18.6, 149.0], [18.7, 150.0], [18.8, 150.0], [18.9, 150.0], [19.0, 150.0], [19.1, 150.0], [19.2, 150.0], [19.3, 150.0], [19.4, 151.0], [19.5, 151.0], [19.6, 151.0], [19.7, 151.0], [19.8, 151.0], [19.9, 151.0], [20.0, 151.0], [20.1, 151.0], [20.2, 151.0], [20.3, 152.0], [20.4, 152.0], [20.5, 152.0], [20.6, 152.0], [20.7, 152.0], [20.8, 152.0], [20.9, 152.0], [21.0, 153.0], [21.1, 153.0], [21.2, 153.0], [21.3, 153.0], [21.4, 153.0], [21.5, 153.0], [21.6, 153.0], [21.7, 153.0], [21.8, 153.0], [21.9, 153.0], [22.0, 153.0], [22.1, 153.0], [22.2, 153.0], [22.3, 154.0], [22.4, 154.0], [22.5, 154.0], [22.6, 154.0], [22.7, 154.0], [22.8, 155.0], [22.9, 155.0], [23.0, 155.0], [23.1, 155.0], [23.2, 156.0], [23.3, 156.0], [23.4, 156.0], [23.5, 156.0], [23.6, 156.0], [23.7, 156.0], [23.8, 156.0], [23.9, 156.0], [24.0, 156.0], [24.1, 156.0], [24.2, 156.0], [24.3, 157.0], [24.4, 157.0], [24.5, 157.0], [24.6, 157.0], [24.7, 157.0], [24.8, 157.0], [24.9, 157.0], [25.0, 157.0], [25.1, 157.0], [25.2, 157.0], [25.3, 158.0], [25.4, 158.0], [25.5, 158.0], [25.6, 158.0], [25.7, 158.0], [25.8, 158.0], [25.9, 158.0], [26.0, 158.0], [26.1, 158.0], [26.2, 158.0], [26.3, 158.0], [26.4, 159.0], [26.5, 159.0], [26.6, 159.0], [26.7, 159.0], [26.8, 159.0], [26.9, 159.0], [27.0, 159.0], [27.1, 159.0], [27.2, 159.0], [27.3, 159.0], [27.4, 159.0], [27.5, 159.0], [27.6, 160.0], [27.7, 160.0], [27.8, 160.0], [27.9, 160.0], [28.0, 160.0], [28.1, 160.0], [28.2, 160.0], [28.3, 160.0], [28.4, 160.0], [28.5, 161.0], [28.6, 161.0], [28.7, 161.0], [28.8, 161.0], [28.9, 161.0], [29.0, 161.0], [29.1, 161.0], [29.2, 161.0], [29.3, 161.0], [29.4, 161.0], [29.5, 161.0], [29.6, 161.0], [29.7, 162.0], [29.8, 162.0], [29.9, 162.0], [30.0, 162.0], [30.1, 162.0], [30.2, 162.0], [30.3, 162.0], [30.4, 162.0], [30.5, 162.0], [30.6, 162.0], [30.7, 163.0], [30.8, 163.0], [30.9, 163.0], [31.0, 163.0], [31.1, 163.0], [31.2, 163.0], [31.3, 164.0], [31.4, 164.0], [31.5, 164.0], [31.6, 164.0], [31.7, 164.0], [31.8, 164.0], [31.9, 164.0], [32.0, 165.0], [32.1, 165.0], [32.2, 165.0], [32.3, 165.0], [32.4, 165.0], [32.5, 165.0], [32.6, 165.0], [32.7, 166.0], [32.8, 166.0], [32.9, 166.0], [33.0, 166.0], [33.1, 166.0], [33.2, 167.0], [33.3, 167.0], [33.4, 167.0], [33.5, 167.0], [33.6, 167.0], [33.7, 167.0], [33.8, 167.0], [33.9, 168.0], [34.0, 168.0], [34.1, 168.0], [34.2, 168.0], [34.3, 168.0], [34.4, 168.0], [34.5, 168.0], [34.6, 169.0], [34.7, 169.0], [34.8, 169.0], [34.9, 169.0], [35.0, 169.0], [35.1, 169.0], [35.2, 169.0], [35.3, 169.0], [35.4, 170.0], [35.5, 170.0], [35.6, 170.0], [35.7, 170.0], [35.8, 170.0], [35.9, 170.0], [36.0, 170.0], [36.1, 170.0], [36.2, 170.0], [36.3, 170.0], [36.4, 170.0], [36.5, 170.0], [36.6, 170.0], [36.7, 171.0], [36.8, 171.0], [36.9, 171.0], [37.0, 171.0], [37.1, 171.0], [37.2, 171.0], [37.3, 171.0], [37.4, 171.0], [37.5, 171.0], [37.6, 171.0], [37.7, 171.0], [37.8, 171.0], [37.9, 172.0], [38.0, 172.0], [38.1, 172.0], [38.2, 172.0], [38.3, 172.0], [38.4, 172.0], [38.5, 172.0], [38.6, 172.0], [38.7, 172.0], [38.8, 172.0], [38.9, 172.0], [39.0, 173.0], [39.1, 173.0], [39.2, 173.0], [39.3, 173.0], [39.4, 173.0], [39.5, 173.0], [39.6, 173.0], [39.7, 173.0], [39.8, 173.0], [39.9, 173.0], [40.0, 173.0], [40.1, 173.0], [40.2, 173.0], [40.3, 173.0], [40.4, 173.0], [40.5, 173.0], [40.6, 173.0], [40.7, 173.0], [40.8, 173.0], [40.9, 173.0], [41.0, 173.0], [41.1, 173.0], [41.2, 173.0], [41.3, 173.0], [41.4, 174.0], [41.5, 174.0], [41.6, 174.0], [41.7, 174.0], [41.8, 174.0], [41.9, 174.0], [42.0, 174.0], [42.1, 174.0], [42.2, 174.0], [42.3, 174.0], [42.4, 174.0], [42.5, 174.0], [42.6, 174.0], [42.7, 174.0], [42.8, 174.0], [42.9, 174.0], [43.0, 174.0], [43.1, 174.0], [43.2, 174.0], [43.3, 174.0], [43.4, 174.0], [43.5, 175.0], [43.6, 175.0], [43.7, 175.0], [43.8, 175.0], [43.9, 175.0], [44.0, 175.0], [44.1, 175.0], [44.2, 175.0], [44.3, 175.0], [44.4, 175.0], [44.5, 175.0], [44.6, 175.0], [44.7, 175.0], [44.8, 175.0], [44.9, 175.0], [45.0, 175.0], [45.1, 175.0], [45.2, 175.0], [45.3, 175.0], [45.4, 175.0], [45.5, 176.0], [45.6, 176.0], [45.7, 176.0], [45.8, 176.0], [45.9, 176.0], [46.0, 176.0], [46.1, 176.0], [46.2, 176.0], [46.3, 176.0], [46.4, 176.0], [46.5, 176.0], [46.6, 176.0], [46.7, 176.0], [46.8, 176.0], [46.9, 176.0], [47.0, 176.0], [47.1, 176.0], [47.2, 176.0], [47.3, 176.0], [47.4, 177.0], [47.5, 177.0], [47.6, 177.0], [47.7, 177.0], [47.8, 177.0], [47.9, 177.0], [48.0, 177.0], [48.1, 177.0], [48.2, 177.0], [48.3, 177.0], [48.4, 177.0], [48.5, 177.0], [48.6, 177.0], [48.7, 177.0], [48.8, 177.0], [48.9, 177.0], [49.0, 177.0], [49.1, 177.0], [49.2, 177.0], [49.3, 177.0], [49.4, 177.0], [49.5, 177.0], [49.6, 177.0], [49.7, 177.0], [49.8, 177.0], [49.9, 177.0], [50.0, 178.0], [50.1, 178.0], [50.2, 178.0], [50.3, 178.0], [50.4, 178.0], [50.5, 178.0], [50.6, 178.0], [50.7, 178.0], [50.8, 178.0], [50.9, 178.0], [51.0, 178.0], [51.1, 178.0], [51.2, 178.0], [51.3, 178.0], [51.4, 178.0], [51.5, 178.0], [51.6, 178.0], [51.7, 178.0], [51.8, 179.0], [51.9, 179.0], [52.0, 179.0], [52.1, 179.0], [52.2, 179.0], [52.3, 179.0], [52.4, 179.0], [52.5, 179.0], [52.6, 179.0], [52.7, 179.0], [52.8, 179.0], [52.9, 179.0], [53.0, 179.0], [53.1, 179.0], [53.2, 179.0], [53.3, 180.0], [53.4, 180.0], [53.5, 180.0], [53.6, 180.0], [53.7, 180.0], [53.8, 180.0], [53.9, 180.0], [54.0, 180.0], [54.1, 180.0], [54.2, 180.0], [54.3, 180.0], [54.4, 180.0], [54.5, 180.0], [54.6, 180.0], [54.7, 180.0], [54.8, 180.0], [54.9, 181.0], [55.0, 181.0], [55.1, 181.0], [55.2, 181.0], [55.3, 181.0], [55.4, 181.0], [55.5, 181.0], [55.6, 181.0], [55.7, 181.0], [55.8, 182.0], [55.9, 182.0], [56.0, 182.0], [56.1, 182.0], [56.2, 182.0], [56.3, 182.0], [56.4, 182.0], [56.5, 182.0], [56.6, 182.0], [56.7, 182.0], [56.8, 182.0], [56.9, 182.0], [57.0, 182.0], [57.1, 182.0], [57.2, 182.0], [57.3, 182.0], [57.4, 183.0], [57.5, 183.0], [57.6, 183.0], [57.7, 183.0], [57.8, 183.0], [57.9, 183.0], [58.0, 184.0], [58.1, 184.0], [58.2, 184.0], [58.3, 184.0], [58.4, 184.0], [58.5, 184.0], [58.6, 184.0], [58.7, 185.0], [58.8, 185.0], [58.9, 185.0], [59.0, 185.0], [59.1, 185.0], [59.2, 185.0], [59.3, 185.0], [59.4, 186.0], [59.5, 186.0], [59.6, 186.0], [59.7, 186.0], [59.8, 186.0], [59.9, 186.0], [60.0, 186.0], [60.1, 186.0], [60.2, 186.0], [60.3, 186.0], [60.4, 186.0], [60.5, 186.0], [60.6, 186.0], [60.7, 187.0], [60.8, 187.0], [60.9, 187.0], [61.0, 187.0], [61.1, 187.0], [61.2, 187.0], [61.3, 187.0], [61.4, 187.0], [61.5, 187.0], [61.6, 187.0], [61.7, 187.0], [61.8, 187.0], [61.9, 187.0], [62.0, 187.0], [62.1, 188.0], [62.2, 188.0], [62.3, 188.0], [62.4, 188.0], [62.5, 188.0], [62.6, 188.0], [62.7, 188.0], [62.8, 188.0], [62.9, 188.0], [63.0, 188.0], [63.1, 188.0], [63.2, 188.0], [63.3, 188.0], [63.4, 188.0], [63.5, 188.0], [63.6, 188.0], [63.7, 188.0], [63.8, 188.0], [63.9, 189.0], [64.0, 189.0], [64.1, 189.0], [64.2, 189.0], [64.3, 189.0], [64.4, 189.0], [64.5, 189.0], [64.6, 189.0], [64.7, 189.0], [64.8, 189.0], [64.9, 189.0], [65.0, 189.0], [65.1, 189.0], [65.2, 189.0], [65.3, 190.0], [65.4, 190.0], [65.5, 190.0], [65.6, 190.0], [65.7, 190.0], [65.8, 190.0], [65.9, 190.0], [66.0, 190.0], [66.1, 190.0], [66.2, 190.0], [66.3, 190.0], [66.4, 190.0], [66.5, 190.0], [66.6, 190.0], [66.7, 191.0], [66.8, 191.0], [66.9, 191.0], [67.0, 191.0], [67.1, 191.0], [67.2, 191.0], [67.3, 191.0], [67.4, 191.0], [67.5, 191.0], [67.6, 191.0], [67.7, 191.0], [67.8, 191.0], [67.9, 191.0], [68.0, 191.0], [68.1, 191.0], [68.2, 191.0], [68.3, 191.0], [68.4, 192.0], [68.5, 192.0], [68.6, 192.0], [68.7, 192.0], [68.8, 192.0], [68.9, 192.0], [69.0, 192.0], [69.1, 192.0], [69.2, 192.0], [69.3, 192.0], [69.4, 192.0], [69.5, 192.0], [69.6, 192.0], [69.7, 192.0], [69.8, 192.0], [69.9, 192.0], [70.0, 192.0], [70.1, 193.0], [70.2, 193.0], [70.3, 193.0], [70.4, 193.0], [70.5, 193.0], [70.6, 193.0], [70.7, 193.0], [70.8, 193.0], [70.9, 193.0], [71.0, 193.0], [71.1, 193.0], [71.2, 193.0], [71.3, 193.0], [71.4, 193.0], [71.5, 193.0], [71.6, 193.0], [71.7, 193.0], [71.8, 193.0], [71.9, 194.0], [72.0, 194.0], [72.1, 194.0], [72.2, 194.0], [72.3, 194.0], [72.4, 194.0], [72.5, 194.0], [72.6, 194.0], [72.7, 194.0], [72.8, 194.0], [72.9, 194.0], [73.0, 194.0], [73.1, 194.0], [73.2, 194.0], [73.3, 194.0], [73.4, 194.0], [73.5, 194.0], [73.6, 195.0], [73.7, 195.0], [73.8, 195.0], [73.9, 195.0], [74.0, 195.0], [74.1, 195.0], [74.2, 195.0], [74.3, 195.0], [74.4, 195.0], [74.5, 196.0], [74.6, 196.0], [74.7, 196.0], [74.8, 196.0], [74.9, 196.0], [75.0, 196.0], [75.1, 196.0], [75.2, 196.0], [75.3, 196.0], [75.4, 196.0], [75.5, 196.0], [75.6, 196.0], [75.7, 196.0], [75.8, 196.0], [75.9, 196.0], [76.0, 197.0], [76.1, 197.0], [76.2, 197.0], [76.3, 197.0], [76.4, 197.0], [76.5, 197.0], [76.6, 197.0], [76.7, 198.0], [76.8, 198.0], [76.9, 198.0], [77.0, 198.0], [77.1, 198.0], [77.2, 198.0], [77.3, 199.0], [77.4, 199.0], [77.5, 199.0], [77.6, 199.0], [77.7, 199.0], [77.8, 199.0], [77.9, 199.0], [78.0, 200.0], [78.1, 200.0], [78.2, 201.0], [78.3, 201.0], [78.4, 201.0], [78.5, 201.0], [78.6, 201.0], [78.7, 201.0], [78.8, 202.0], [78.9, 202.0], [79.0, 202.0], [79.1, 202.0], [79.2, 203.0], [79.3, 203.0], [79.4, 203.0], [79.5, 203.0], [79.6, 203.0], [79.7, 203.0], [79.8, 203.0], [79.9, 204.0], [80.0, 204.0], [80.1, 204.0], [80.2, 204.0], [80.3, 204.0], [80.4, 204.0], [80.5, 204.0], [80.6, 205.0], [80.7, 205.0], [80.8, 205.0], [80.9, 205.0], [81.0, 205.0], [81.1, 206.0], [81.2, 206.0], [81.3, 206.0], [81.4, 206.0], [81.5, 207.0], [81.6, 207.0], [81.7, 208.0], [81.8, 208.0], [81.9, 208.0], [82.0, 208.0], [82.1, 209.0], [82.2, 209.0], [82.3, 209.0], [82.4, 210.0], [82.5, 210.0], [82.6, 210.0], [82.7, 210.0], [82.8, 211.0], [82.9, 211.0], [83.0, 211.0], [83.1, 211.0], [83.2, 212.0], [83.3, 212.0], [83.4, 214.0], [83.5, 214.0], [83.6, 215.0], [83.7, 215.0], [83.8, 216.0], [83.9, 216.0], [84.0, 217.0], [84.1, 217.0], [84.2, 217.0], [84.3, 217.0], [84.4, 217.0], [84.5, 218.0], [84.6, 218.0], [84.7, 219.0], [84.8, 219.0], [84.9, 220.0], [85.0, 220.0], [85.1, 221.0], [85.2, 221.0], [85.3, 222.0], [85.4, 224.0], [85.5, 224.0], [85.6, 225.0], [85.7, 226.0], [85.8, 226.0], [85.9, 227.0], [86.0, 228.0], [86.1, 228.0], [86.2, 228.0], [86.3, 231.0], [86.4, 232.0], [86.5, 232.0], [86.6, 234.0], [86.7, 235.0], [86.8, 236.0], [86.9, 236.0], [87.0, 238.0], [87.1, 238.0], [87.2, 238.0], [87.3, 238.0], [87.4, 242.0], [87.5, 245.0], [87.6, 245.0], [87.7, 250.0], [87.8, 251.0], [87.9, 251.0], [88.0, 252.0], [88.1, 258.0], [88.2, 261.0], [88.3, 263.0], [88.4, 270.0], [88.5, 271.0], [88.6, 278.0], [88.7, 283.0], [88.8, 289.0], [88.9, 290.0], [89.0, 291.0], [89.1, 297.0], [89.2, 313.0], [89.3, 313.0], [89.4, 320.0], [89.5, 321.0], [89.6, 325.0], [89.7, 332.0], [89.8, 335.0], [89.9, 336.0], [90.0, 339.0], [90.1, 351.0], [90.2, 354.0], [90.3, 355.0], [90.4, 365.0], [90.5, 367.0], [90.6, 369.0], [90.7, 378.0], [90.8, 381.0], [90.9, 382.0], [91.0, 384.0], [91.1, 392.0], [91.2, 396.0], [91.3, 405.0], [91.4, 411.0], [91.5, 411.0], [91.6, 411.0], [91.7, 420.0], [91.8, 421.0], [91.9, 425.0], [92.0, 425.0], [92.1, 427.0], [92.2, 433.0], [92.3, 436.0], [92.4, 438.0], [92.5, 439.0], [92.6, 442.0], [92.7, 444.0], [92.8, 446.0], [92.9, 446.0], [93.0, 448.0], [93.1, 448.0], [93.2, 455.0], [93.3, 458.0], [93.4, 473.0], [93.5, 482.0], [93.6, 500.0], [93.7, 525.0], [93.8, 528.0], [93.9, 539.0], [94.0, 541.0], [94.1, 583.0], [94.2, 588.0], [94.3, 589.0], [94.4, 599.0], [94.5, 606.0], [94.6, 611.0], [94.7, 624.0], [94.8, 633.0], [94.9, 637.0], [95.0, 649.0], [95.1, 669.0], [95.2, 672.0], [95.3, 677.0], [95.4, 694.0], [95.5, 695.0], [95.6, 711.0], [95.7, 745.0], [95.8, 766.0], [95.9, 767.0], [96.0, 790.0], [96.1, 801.0], [96.2, 802.0], [96.3, 802.0], [96.4, 803.0], [96.5, 804.0], [96.6, 804.0], [96.7, 817.0], [96.8, 822.0], [96.9, 824.0], [97.0, 837.0], [97.1, 846.0], [97.2, 856.0], [97.3, 857.0], [97.4, 862.0], [97.5, 866.0], [97.6, 874.0], [97.7, 879.0], [97.8, 888.0], [97.9, 893.0], [98.0, 924.0], [98.1, 952.0], [98.2, 960.0], [98.3, 962.0], [98.4, 976.0], [98.5, 977.0], [98.6, 990.0], [98.7, 1019.0], [98.8, 1022.0], [98.9, 1042.0], [99.0, 1055.0], [99.1, 1070.0], [99.2, 1112.0], [99.3, 1112.0], [99.4, 1135.0], [99.5, 1162.0], [99.6, 1164.0], [99.7, 1175.0], [99.8, 1202.0], [99.9, 1209.0], [100.0, 1249.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 3.0, "minX": 100.0, "maxY": 1014.0, "series": [{"data": [[1100.0, 8.0], [600.0, 14.0], [300.0, 27.0], [1200.0, 3.0], [700.0, 7.0], [100.0, 1014.0], [800.0, 24.0], [200.0, 145.0], [400.0, 30.0], [900.0, 9.0], [500.0, 12.0], [1000.0, 7.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1200.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 83.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1217.0, "series": [{"data": [[0.0, 1217.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 83.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 29.450000000000003, "minX": 1.71483084E12, "maxY": 29.450000000000003, "series": [{"data": [[1.71483084E12, 29.450000000000003]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71483084E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 136.0, "minX": 1.0, "maxY": 1055.0, "series": [{"data": [[2.0, 170.0], [3.0, 144.0], [4.0, 179.0], [5.0, 186.0], [6.0, 154.0], [7.0, 160.0], [8.0, 140.0], [9.0, 155.0], [10.0, 156.0], [11.0, 222.0], [12.0, 139.0], [13.0, 136.0], [15.0, 145.0], [16.0, 159.0], [17.0, 137.0], [18.0, 165.25], [19.0, 162.68750000000006], [20.0, 159.61052631578949], [21.0, 163.57692307692304], [22.0, 172.21428571428572], [23.0, 176.1856540084388], [24.0, 177.58333333333334], [25.0, 186.76190476190473], [26.0, 196.9], [27.0, 196.58333333333334], [28.0, 245.33333333333331], [29.0, 222.4], [30.0, 245.2], [31.0, 239.37500000000003], [33.0, 291.0], [32.0, 233.5], [35.0, 252.5], [34.0, 325.0], [37.0, 179.0], [38.0, 263.3333333333333], [40.0, 326.6666666666667], [43.0, 438.0], [44.0, 420.3333333333333], [48.0, 405.4], [51.0, 366.3333333333333], [53.0, 332.5], [55.0, 427.0], [57.0, 388.3333333333333], [59.0, 438.0], [61.0, 374.0], [60.0, 350.0], [63.0, 542.0], [62.0, 383.75], [67.0, 417.0], [66.0, 594.6], [71.0, 695.3333333333334], [69.0, 624.0], [75.0, 938.3333333333334], [74.0, 720.0], [72.0, 426.0], [79.0, 643.6666666666666], [77.0, 725.5], [82.0, 692.75], [81.0, 756.0], [83.0, 455.0], [80.0, 805.0], [87.0, 787.6666666666666], [85.0, 838.0], [84.0, 1021.0], [90.0, 846.8749999999999], [88.0, 385.75], [91.0, 716.0], [89.0, 902.0], [92.0, 640.1666666666666], [95.0, 945.5], [94.0, 883.3333333333334], [99.0, 619.3333333333334], [98.0, 1055.0], [97.0, 644.6666666666666], [96.0, 972.0], [100.0, 832.0], [101.0, 799.5], [102.0, 990.0], [107.0, 421.0], [110.0, 523.0769230769231], [111.0, 163.0], [112.0, 588.2307692307693], [114.0, 631.0], [1.0, 186.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[29.449230769230745, 226.1607692307691]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 114.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 3488.3333333333335, "minX": 1.71483084E12, "maxY": 24978.866666666665, "series": [{"data": [[1.71483084E12, 24978.866666666665]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71483084E12, 3488.3333333333335]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71483084E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 226.1607692307691, "minX": 1.71483084E12, "maxY": 226.1607692307691, "series": [{"data": [[1.71483084E12, 226.1607692307691]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71483084E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 226.0038461538462, "minX": 1.71483084E12, "maxY": 226.0038461538462, "series": [{"data": [[1.71483084E12, 226.0038461538462]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71483084E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 165.70384615384629, "minX": 1.71483084E12, "maxY": 165.70384615384629, "series": [{"data": [[1.71483084E12, 165.70384615384629]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71483084E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 104.0, "minX": 1.71483084E12, "maxY": 1249.0, "series": [{"data": [[1.71483084E12, 1249.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71483084E12, 345.30000000000064]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71483084E12, 1066.88]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71483084E12, 655.6500000000003]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.71483084E12, 104.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71483084E12, 178.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71483084E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 170.0, "minX": 109.0, "maxY": 446.0, "series": [{"data": [[129.0, 180.0], [128.0, 180.0], [185.0, 446.0], [109.0, 173.0], [122.0, 170.0], [125.0, 175.0], [126.0, 175.5], [127.0, 173.0], [124.0, 172.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 185.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 170.0, "minX": 109.0, "maxY": 446.0, "series": [{"data": [[129.0, 180.0], [128.0, 180.0], [185.0, 446.0], [109.0, 173.0], [122.0, 170.0], [125.0, 175.0], [126.0, 175.5], [127.0, 173.0], [124.0, 172.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 185.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 21.666666666666668, "minX": 1.71483084E12, "maxY": 21.666666666666668, "series": [{"data": [[1.71483084E12, 21.666666666666668]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71483084E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 21.666666666666668, "minX": 1.71483084E12, "maxY": 21.666666666666668, "series": [{"data": [[1.71483084E12, 21.666666666666668]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71483084E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 21.666666666666668, "minX": 1.71483084E12, "maxY": 21.666666666666668, "series": [{"data": [[1.71483084E12, 21.666666666666668]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71483084E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 21.666666666666668, "minX": 1.71483084E12, "maxY": 21.666666666666668, "series": [{"data": [[1.71483084E12, 21.666666666666668]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71483084E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

