import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = [
  "S.No",
  "Review",
  "Sentiment",
  "Authenicity",
];

const TABLE_ROWS = [
  {
    num: "John Michael",
    review: "Manager",
    sentiment: "positive",
    fake:"fake"
  },
  {
    num: "Alexa Liras",
    review: "Developer",
    sentiment: "positive",
    fake:"fake"
  },
  {
    num: "Laurent Perrier",
    review: "Executive",
    sentiment: "positive",
    fake:"fake"
  },
  {
    num: "Michael Levi",
    review: "Developer",
    sentiment: "positive",
    fake:"fake"
  },
  {
    num: "Richard Gran",
    review: "Manager",
    sentiment: "positive",
    fake:"fake"
  },
];

export function DefaultTable() {
  return (
    <Card className="mt-5 h-full w-11/12 bg-[#323262] text-cyan-50 rounded-md  max-h-96 mx-auto">
      <table className=" w-full min-w-max table-auto text-left text-cyan-50 rounded-md">
        <thead className="rounded-md">
          <tr className="rounded-md">
            {TABLE_HEAD.map((head,idx) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-[#4646b2] p-4 rounded"
              >
                <Typography
                  variant="small"
                  color="white"
                  className="font-normal leading-none"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ num, review, sentiment,fake }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

            return (
              <tr key={num}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="white"
                    className="font-normal"
                  >
                    {num}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="white"
                    className="font-normal"
                  >
                    {review}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="white"
                    className="font-normal"
                  >
                    {sentiment}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="white"
                    className="font-normal"
                  >
                    {fake}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}
