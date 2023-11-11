import React from 'react';

const Home = (() => {

  return (
    <>
      <div className="max-w-5xl bg-gray-300 flex flex-col justify-start items-center rounded-lg p-6">
        <strong className="text-3xl font-bold">About Yummy Yields</strong>
        <hr className="border-gray-600 border w-full mb-2" />
        <p className="text-lg text-left">
          Welcome to Yummy Yields, your go-to destination for straightforward and delicious recipes designed for the home cook who appreciates simplicity without sacrificing flavor. At Yummy Yields, we believe in cutting through the noise to deliver exactly what you need – no frills, no lengthy blog posts, just the recipes you crave.
          <br />
          <br />
          Our mission is to make your time in the kitchen enjoyable and stress-free. Whether you're a seasoned chef or a beginner, our collection of recipes caters to all skill levels, providing easy-to-follow instructions and minimal ingredients. We understand that life can get busy, so our focus is on maximizing flavor with minimal effort.
          <br />
          <br />
          Explore a variety of dishes from appetizers to desserts, curated with your busy lifestyle in mind. Yummy Yields is more than just a recipe website; it's your culinary companion, helping you create delicious meals without the unnecessary fuss.
          <br />
          <br />
          Join our community of home cooks who appreciate the beauty of simplicity. Let's make cooking enjoyable and the results downright delicious. Welcome to Yummy Yields – where simplicity meets flavor!
        </p>
        <a className="mt-8 p-2 bg-theme-blue text-white font-semibold rounded-lg" href="/recipes">View Recipes Now!</a>
      </div>
    </>
  );

});

export { Home };