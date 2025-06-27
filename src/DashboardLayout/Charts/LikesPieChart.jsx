import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts';

const COLORS = ['#fde68a', '#facc15', '#fbbf24', '#f59e0b', '#d97706'];

const LikesPieChart = ({ data }) => (
  <div className="w-full md:w-1/2 p-6 bg-white border-2 border-yellow-400 rounded-xl shadow-md">
    <h2 className="text-xl font-semibold text-yellow-600 mb-4 font-oderna">Likes Distribution</h2>
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          dataKey="likes"
          nameKey="name"
          outerRadius={100}
          fill="#facc15"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  </div>
);

export default LikesPieChart