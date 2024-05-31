using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Data
{
    public class FullstackDbContext : DbContext
    {
        public FullstackDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Employee> Employees { get; set; }

    }
}
