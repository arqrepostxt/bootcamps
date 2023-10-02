using IntroEntityFramework.Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace IntroEntityFramework.Data
{
    public class Context : DbContext
    {
        public Context(DbContextOptions<Context> options) : base(options)
        {

        }
        public DbSet<Contato> Contatos {get; set;}
        }
}
