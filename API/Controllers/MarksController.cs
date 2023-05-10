using Core.Entities;
using Infrastructure.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MarksController : ControllerBase
    {
        private readonly SmartyContext _context;
        public MarksController(SmartyContext context)
        {
            _context = context;

        }

        [HttpGet]
        public async Task<ActionResult<List<Mark>>> GetMarks()
        {
            var marks = await _context.Marks.ToListAsync();
            return marks;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Mark>> GetMark(int id)
        {
            return await _context.Marks.FindAsync(id);
        }
    }
}