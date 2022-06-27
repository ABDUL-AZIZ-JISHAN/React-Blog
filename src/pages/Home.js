
import { useState } from 'react';
import BlogList from '../component/BlogList';
import { blogList } from '../component/data';
import EmptyList from '../component/EmptyList.js';
import Header from '../component/Header';
import SearchBar from '../component/SearchBar';
const Home = () => {
    const [blogs, setBlogs] = useState(blogList);
    const [searchKey, setSearchKey] = useState('');

    // Search submit
    const handleSearchBar = (e) => {
        e.preventDefault();
        handleSearchResults();
    };

    // Search for blog by category
    const handleSearchResults = () => {
        const allBlogs = blogList;
        const filteredBlogs = allBlogs.filter((blog) =>
            blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
        );
        setBlogs(filteredBlogs);
    };

    // Clear search and show all blogs
    const handleClearSearch = () => {
        setBlogs(blogList);
        setSearchKey('');
    };

    return (
        <div>
            {/* Page Header */}
            <Header />

            {/* Search Bar */}
            <SearchBar
                value={searchKey}
                clearSearch={handleClearSearch}
                formSubmit={handleSearchBar}
                handleSearchKey={(e) => setSearchKey(e.target.value)}
            />

            {/* Blog List & Empty View */}
            {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
        </div>
    );
};

export default Home;


