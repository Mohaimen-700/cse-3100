import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Sphynx' },
  { name: 'Mittens', age: '2', breed: 'Bengal' },
  { name: 'Shadow', age: '1', breed: 'Abyssinian' },
  { name: 'Pumpkin', age: '3', breed: 'Persian' },
  { name: 'Luna', age: '4', breed: 'Siamese' },
  { name: 'Simba', age: '2', breed: 'Birman' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('');

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          availableCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())
          )
        );
        const catsWithImages = availableCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));

        setCats(catsWithImages);
        setFilteredCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  const handleSearchChange = (e) => {
    setSearchName(e.target.value);
  };

  const handleBreedChange = (e) => {
    setSelectedBreed(e.target.value);
  };

  useEffect(() => {
    let updatedCats = cats;

    if (searchName) {
      updatedCats = updatedCats.filter((cat) =>
        cat.name.toLowerCase().includes(searchName.toLowerCase())
      );
    }

    if (selectedBreed) {
      updatedCats = updatedCats.filter((cat) => cat.breed === selectedBreed);
    }

    setFilteredCats(updatedCats);
  }, [searchName, selectedBreed, cats]);

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      {/* Filters */}
      <div className="filters mb-4">
        <input
          type="text"
          placeholder="Search by name"
          value={searchName}
          onChange={handleSearchChange}
          className="form-control d-inline-block me-2"
          style={{ maxWidth: '200px' }}
        />
        <select
          value={selectedBreed}
          onChange={handleBreedChange}
          className="form-select d-inline-block"
          style={{ maxWidth: '200px' }}
        >
          <option value="">All Breeds</option>
          <option value="Sphynx">Sphynx</option>
          <option value="Bengal">Bengal</option>
          <option value="Abyssinian">Abyssinian</option>
          <option value="Persian">Persian</option>
          <option value="Siamese">Siamese</option>
          <option value="Birman">Birman</option>
        </select>
      </div>

      {/* Cats Display */}
      <div className="mt-2 row g-4 cats-container" id="cats-container">
        {filteredCats.length > 0 ? (
          filteredCats.map((cat, i) => (
            <div key={i} className="col-md-4">
              <div className="cat-card">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="img-fluid mb-2"
                  style={{
                    borderRadius: '8px',
                    height: '200px',
                    objectFit: 'cover',
                  }}
                />
                <div className="cat-info">
                  <h3 className="h5 mb-1">{cat.name}</h3>
                  <p className="mb-0">Age: {cat.age}</p>
                  <p className="mb-0">Breed: {cat.breed}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No cats found matching the criteria.</p>
        )}
      </div>
    </section>
  );
}  