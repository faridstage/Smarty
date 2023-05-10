using Core.Entities;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data
{
    public class SmartyContext : DbContext
    {
        public SmartyContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<Mark> Marks { get; set; }
    }
}