const data = [50, 80, 30, 60, 90]; // height of bars

const ActivityFeed = () => {
  return (
    <div>
      <h3>Activity</h3>
      <div className="bar-chart">
        {data.map((height, index) => (
          <div key={index} className="bar" style={{ height: `${height}px` }}></div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
