// import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

// const LikesBarChart = ({ data }) => (
//   <div className="w-full md:w-2/3 p-6 bg-white border-2 border-yellow-400 rounded-xl shadow-md">
//     <h2 className="text-xl font-semibold text-yellow-600 mb-4 font-oderna">Likes per Recipe</h2>
//     <ResponsiveContainer width="100%" height={300}>
//       <BarChart data={data}>
//         <CartesianGrid strokeDasharray="3 3" stroke="#facc15" />
//         <XAxis dataKey="name" tick={{ fontSize: 12 }} />
//         <YAxis />
//         <Tooltip />
//         <Bar dataKey="likes" fill="#facc15" radius={[4, 4, 0, 0]} />
//       </BarChart>
//     </ResponsiveContainer>
//   </div>
// );

// export default LikesBarChart


import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

const LikesBarChart = ({ data }) => {
  return (
    <div className="w-full overflow-x-auto p-6 bg-white border-2 border-yellow-400 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold text-yellow-600 mb-4 font-oderna">Likes per Recipe</h2>
      <div className="min-w-[600px]"> {/* Make it scrollable if too many bars */}
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={data}
            margin={{ top: 10, right: 30, left: 10, bottom: 50 }}
            barCategoryGap={20}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#facc15" />
            <XAxis
              dataKey="name"
              angle={-30}
              textAnchor="end"
              interval={0}
              height={60}
              tick={{ fontSize: 12 }}
            />
            <YAxis />
            <Tooltip />
            <Bar dataKey="likes" fill="#facc15" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LikesBarChart;
