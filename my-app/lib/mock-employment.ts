export type DataPoint = { date: string; value: number };
export type SeriesData = { id: string; title: string; unit: string; color: string; data: DataPoint[] };

const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

function buildSeries(values: number[]): DataPoint[] {
  return values.map((value, i) => ({
    date: `${months[i % 12]} ${2020 + Math.floor(i / 12)}`,
    value,
  }));
}

export const employmentSeries: SeriesData[] = [
  {
    id: "unemployment",
    title: "Unemployment Rate",
    unit: "Percent",
    color: "#2563eb",
    data: buildSeries([
      3.5,3.5,4.4,14.7,13.3,11.1,10.2,8.4,7.9,6.9,6.7,6.7,
      6.4,6.2,6.0,6.0,5.8,5.9,5.4,5.2,4.8,4.6,4.2,3.9,
      4.0,3.8,3.6,3.6,3.6,3.6,3.5,3.7,3.5,3.7,3.7,3.5,
      3.4,3.6,3.5,3.4,3.7,3.6,3.5,3.8,3.8,3.9,3.7,3.7,
      3.7,3.9,3.8,3.9,4.0,4.1,4.3,4.2,4.1,4.1,4.2,4.2,
    ]),
  },
  {
    id: "nonfarm-payrolls",
    title: "Nonfarm Payrolls (Monthly Change)",
    unit: "Thousands",
    color: "#2563eb",
    data: buildSeries([
      214,-701,-1373,-20787,2833,4781,1583,1583,672,653,245,233,
      233,166,785,269,583,962,1091,483,379,648,210,588,
      714,714,398,398,386,292,537,315,263,263,284,223,
      472,248,258,253,339,306,236,177,216,175,232,216,
      256,275,310,192,218,218,114,89,255,36,227,256,
    ]),
  },
  {
    id: "labor-participation",
    title: "Labor Force Participation Rate",
    unit: "Percent",
    color: "#2563eb",
    data: buildSeries([
      63.4,63.4,62.7,60.2,60.8,61.5,61.7,61.7,61.4,61.7,61.5,61.5,
      61.5,61.4,61.5,61.7,61.6,61.6,61.7,61.7,61.6,61.8,61.8,61.9,
      62.2,62.3,62.4,62.2,62.3,62.2,62.1,62.4,62.3,62.2,62.1,62.3,
      62.4,62.5,62.6,62.6,62.6,62.6,62.6,62.8,62.8,62.7,62.5,62.5,
      62.5,62.5,62.7,62.7,62.7,62.6,62.7,62.8,62.7,62.6,62.5,62.5,
    ]),
  },
  {
    id: "job-openings",
    title: "Job Openings (JOLTS)",
    unit: "Thousands",
    color: "#2563eb",
    data: buildSeries([
      6985,6882,5996,4996,5481,6001,6647,6617,6336,6652,6652,6646,
      7367,7099,7526,8288,9286,9483,10900,11098,10439,11078,11033,11448,
      11855,11371,11855,11549,11855,11254,10698,10733,10717,10717,10458,10334,
      9974,9931,9825,9590,9559,9590,9590,8827,9510,8861,8861,8925,
      8832,8832,8751,8488,8059,7948,7673,7524,7443,7372,7744,8098,
    ]),
  },
];
