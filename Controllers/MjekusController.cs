using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ElectronicHealthCare.Models;

namespace ElectronicHealthCare.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MjekusController : ControllerBase
    {
        private readonly EhrDbContext _context;

        public MjekusController(EhrDbContext context)
        {
            _context = context;
        }

        // GET: api/Mjekus
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Mjeku>>> GetMjekus()
        {
            return await _context.Mjekus.ToListAsync();
        }

        // GET: api/Mjekus/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Mjeku>> GetMjeku(int id)
        {
            var mjeku = await _context.Mjekus.FindAsync(id);

            if (mjeku == null)
            {
                return NotFound();
            }

            return mjeku;
        }

        // PUT: api/Mjekus/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMjeku(int id, Mjeku mjeku)
        {
            if (id != mjeku.MjekuId)
            {
                return BadRequest();
            }

            _context.Entry(mjeku).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MjekuExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Mjekus
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Mjeku>> PostMjeku(Mjeku mjeku)
        {
            _context.Mjekus.Add(mjeku);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (MjekuExists(mjeku.MjekuId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetMjeku", new { id = mjeku.MjekuId }, mjeku);
        }

        // DELETE: api/Mjekus/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMjeku(int id)
        {
            var mjeku = await _context.Mjekus.FindAsync(id);
            if (mjeku == null)
            {
                return NotFound();
            }

            _context.Mjekus.Remove(mjeku);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool MjekuExists(int id)
        {
            return _context.Mjekus.Any(e => e.MjekuId == id);
        }
    }
}
