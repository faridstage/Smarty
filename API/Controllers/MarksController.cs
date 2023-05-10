using Core.Entities;
using Core.Interfaces;
using Infrastructure.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MarksController : ControllerBase
    {
        private readonly IMarkRepository _repo;
        public MarksController(IMarkRepository repo)
        {
            _repo = repo;

        }

        [HttpGet]
        public async Task<ActionResult<List<Mark>>> GetMarks()
        {
            var marks = await _repo.GetMarksAsync();
            return Ok(marks);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Mark>> GetMark(int id)
        {
            return await _repo.GetMarkByIdAsync(id);
        }

        [HttpGet("brands")]
        public async Task<ActionResult<IReadOnlyList<MarkBrand>>> GetMarkBrands()
        {
            return Ok(await _repo.GetMarkBrandsAsync());
        }

        [HttpGet("types")]
        public async Task<ActionResult<IReadOnlyList<MarkType>>> GetMarkTypes()
        {
            return Ok(await _repo.GetMarkTypesAsync());
        }
    }
}