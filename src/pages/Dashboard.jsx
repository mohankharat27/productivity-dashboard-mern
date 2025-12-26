import Navbar from "../components/Navbar";
import Header from "../components/Header";
import FeatureCard from "../components/FeatureCard";

const Dashboard = () => {
  return (
    <div id="main">
      <Navbar />

      <section className="allElems">
        <Header />

        <div className="allFeatures">
          <FeatureCard
            image="https://plus.unsplash.com/premium_photo-1710962184909-f9f8dc2c9f5f"
            title="To Do List"
          />

          <FeatureCard
            image="https://images.unsplash.com/photo-1677249490921-3246e81f19e3"
            title="Daily Planner"
          />

          <FeatureCard
            image="https://images.unsplash.com/photo-1678986718987-76f0b9357e0f"
            title="Motivation"
          />

          <FeatureCard
            image="https://images.unsplash.com/photo-1648457259767-e3a7fea65a99"
            title="Pomodoro Timer"
          />

          <FeatureCard
            image="https://images.unsplash.com/photo-1718202248232-0cdbc15d29b2"
            title="Daily Goals"
          />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
